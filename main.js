let progress_bar = null

async function run(args) {
    const droprates = eval('[' + args.droprates + ']').map(Number)
    const demands = eval('[' + args.demands + ']').map(Number)

    const max_pull = args.fast_approximation ? 1000000000000000 :
                     args.multidrop ? 1000000 : 50000

    for (const x of droprates)
        if (isNaN(x) || x <= 0 || x > 1)
            throw 'Invalid droprate'

    if (droprates.length == 0)
        throw 'No droprates'

    for (const x of demands)
        if (!Number.isInteger(x) || x < 0)
            throw 'Invalid demand'

    if (demands.length == 0)
        while (demands.length < droprates.length)
            demands.push(1)
    else if (demands.length != droprates.length)
        throw 'Mismatched droprates and demands'

    if (!args.multidrop && droprates.reduce((a, b) => a + b, 0) > 1)
        throw 'Total droprate exceeds 100%'

    const checkpoints = [0.5, 0.8, 0.9, 0.95, 0.99, 0.999, 0.9999]
    const checkpoint_pulls = checkpoints.map(x => null)

    // console.log(fast_approximation_probability(15, droprates, demands))
    // console.log(multi_drop_probability(15, droprates, demands, []))
    // console.log(single_drop_probability(15, droprates, demands, {}))

    if (args.fast_approximation) {
        checkpoint_loop: for (let checkpoint_index = 0; checkpoint_index < checkpoints.length; checkpoint_index++) {
            let l = demands.reduce((a, b) => Math.max(a, b), 0)
            let r = l * 2

            while (fast_approximation_probability(r, droprates, demands) < checkpoints[checkpoint_index]) {
                r *= 2
                if (r >= max_pull)
                    break checkpoint_loop
            }

            while (r > l + 1) {
                const mid = Math.floor(l / 2 + r / 2)
                if (fast_approximation_probability(mid, droprates, demands) < checkpoints[checkpoint_index])
                    l = mid
                else
                    r = mid
            }

            checkpoint_pulls[checkpoint_index] = r
        }
    } else {
        const probability = args.multidrop ? multi_drop_probability : single_drop_probability
        const cache = args.multidrop ? [] : {}

        let next_checkpoint_index = 0
        pull_loop: for (let pulls = 1; pulls <= max_pull; pulls++) {
            const p = probability(pulls, droprates, demands, cache)

            if (pulls % Math.floor(max_pull / 100) == 0) {
                if (!progress_bar) {
                    progress_bar = document.createElement('progress')
                    progress_bar.max = 1
                    progress_bar.style.marginLeft = '1em'
                    document.body.insertBefore(progress_bar, document.querySelector('pre'))
                }

                progress_bar.value = Math.max(p, pulls / max_pull)
                await new Promise(resolve => setTimeout(resolve, 0))
            }

            while (p > checkpoints[next_checkpoint_index]) {
                checkpoint_pulls[next_checkpoint_index] = pulls
                next_checkpoint_index += 1
                if (next_checkpoint_index >= checkpoints.length)
                    break pull_loop
            }
        }
    }

    let result = typeof Deno != 'undefined' || document.title.includes("One Set")
        ? "Prob.\t#Chests\n"
        : "集齐概率\t抽卡次数\n"
    for (let i = 0; i < checkpoints.length; i++)
        result += checkpoints[i] + '\t' + (checkpoint_pulls[i] ?? `>${max_pull}`) + '\n'

    if (progress_bar)
        progress_bar.remove()
    progress_bar = null

    return result
}

function single_drop_probability(pulls, droprates, demands, cache) {
    if (demands.every(x => x <= 0))
        return 1

    if (pulls <= 0)
        return 0

    const k = pulls + ',' + demands.join(',')
    if (k in cache)
        return cache[k]

    let considered_cases_probability = 0
    let p = 0
    for (let i = 0; i < droprates.length; i++) {
        if (demands[i] <= 0)
            continue

        const d = demands.slice()
        d[i] -= 1
        p += droprates[i] * single_drop_probability(pulls - 1, droprates, d, cache)
        considered_cases_probability += droprates[i]
    }

    p += (1 - considered_cases_probability) * single_drop_probability(pulls - 1, droprates, demands, cache)

    return cache[k] = p
}

function multi_drop_probability(pulls, droprates, demands, cache) {
    function binomial(n, k, p, cache) {
        if (k <= 0)
            return 1

        if (n <= 0)
            return 0

        const key = n + ',' + k
        if (key in cache)
            return cache[key]

        return cache[key] = p * binomial(n - 1, k - 1, p, cache) + (1 - p) * binomial(n - 1, k, p, cache)
    }

    while (cache.length < droprates.length)
        cache.push({})

    let p = 1
    for (let i = 0; i < droprates.length; i++)
        p *= binomial(pulls, demands[i], droprates[i], cache[i])

    return p
}

function fast_approximation_probability(pulls, droprates, demands) {
    let p = 1
    for (let i = 0; i < droprates.length; i++)
        if (demands[i] > 0)
            p *= 1 - cdf(demands[i]-1, pulls, droprates[i])

    return p
}

if (typeof Deno != 'undefined')
    run({ droprates: "0.5,0.1,0.1", demands: "2,2,1", multidrop: true, fast_approximation: true }).then(console.log)
else {
    document.querySelector('input[name="fast_approximation"]').addEventListener('change', e => {
        if (e.target.checked)
            document.querySelector('input[name="multidrop"]').checked = true
    })

    document.querySelector('input[name="multidrop"]').addEventListener('change', e => {
        if (!e.target.checked)
            document.querySelector('input[name="fast_approximation"]').checked = false
    })
}
