let progress_bar = null

async function run(args) {
    const droprates = eval('[' + args.droprates + ']').map(Number)
    const demands = eval('[' + args.demands + ']').map(Number)

    const max_pull = args.multidrop ? 1_000_000 : 100_000
    const log_interval = args.multidrop ? 5000 : 1000

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

    const probability = args.multidrop ? multi_drop_probability : single_drop_probability
    const cache = args.multidrop ? [] : {}

    const check_points = [0.5, 0.75, 0.9, 0.95, 0.99, 0.999, 0.9999]
    const check_point_probabilities = check_points.map(x => 0)

    let next_check_point = 0
    for (let pulls = 1; pulls <= max_pull; pulls++) {
        const p = probability(pulls, droprates, demands, cache)

        if (pulls % log_interval == 0) {
            if (!progress_bar) {
                progress_bar = document.createElement('progress')
                progress_bar.max = 1
                document.body.insertBefore(progress_bar, document.querySelector('pre'))
            }

            progress_bar.value = Math.max(p, pulls / max_pull)
            await new Promise(resolve => setTimeout(resolve, 0))
        }

        if (p < check_points[next_check_point])
            continue

        check_point_probabilities[next_check_point] = pulls
        next_check_point += 1
        if (next_check_point >= check_points.length)
            break
    }

    let result = "集齐概率\t抽卡次数\n"
    for (let i = 0; i < check_points.length; i++)
        result += check_points[i] + '\t' + (i < next_check_point ? check_point_probabilities[i] : `>${max_pull}` ) + '\n'

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

// in multi drop setting, the fulfill probability of each demand is independent
// the fulfill probability of one demand is the cdf of binomial distribution
// however, the calculation involves the beta function which is not available in js
// so we still calculate it with recursion
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

if (typeof Deno != 'undefined')
    run({}).then(console.log)
