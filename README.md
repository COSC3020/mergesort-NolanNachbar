# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Recall my function:
```js
function mergesort(array) {
    var subarraysize = 1;
    while (subarraysize < array.length) {
        for (var start = 0; start < array.length; start += 2 * subarraysize) {
            var midsub = Math.min(start + subarraysize, array.length);
            var endsub = Math.min(start + 2 * subarraysize, array.length);
            var a = start, b = midsub;
            while (a < b && b < endsub) {
                if (array[a] <= array[b]) {
                    a++;
                } else {
                    let t = array[b];
                    for (let k = b; k > a; k--) {
                        array[k] = array[k - 1];
                    }
                    array[a] = t;
                    a++;
                    b++;
                }
            }
        }
        subarraysize *= 2;
    }
    return array;
}
```

1. If the array has 0 or 1 elements, it’s sorted (while loop won't run). Stop. T (1) = 1
2. Split the array into one element pieces. 1
3. Sort each half recursively (using Mergesort). 2T (n/2)
4. Merge the sorted halves to produce one sorted result: n

Thus, our recurrence relation is:

$$
T(n) = \begin{cases}
1 & \text{ if } & n \leq 1 \\
3\mathrm{T}(\frac{n}{3}) + 2 & \text{ if } & n > 1
\end{cases}
$$

Now to solve the recurrence relation by substitution:

$$
T(n) = 3T(n/3) + 2
$$

$$
= 3(3T(n/9) + 2) + 2
$$

$$
\vdots
$$

$$
= 3^i T(n/3^i) + i \cdot 2
$$

For $i = \log n$:

$$
T(n) = 3^{\log n} \cdot T(1) + 2 \cdot \log n
$$

$$
T(n) = n + 2 \cdot \log n
$$

Thus, the time complexity is:

$$
T(n) \in \Theta(n log n)
$$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
