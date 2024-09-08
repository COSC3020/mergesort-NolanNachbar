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

Recall the time complexity for a standard recursive mergsort. 
$
T (n) =
\begin{cases}
1 \text{ if } n \le 1\\
2T (n/2) + n \text{ if } n > 1
$$

Because my solution is iterative and in place, it is less time efficient but more memory efficient. The largest difference in time compexity is that because my function is sorting in place, it must shift elements. 


Also recall my function:
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

Now analysing the function in the context of the worst case runtime:

1. The outer while-loop runs $log_2 n$ times. This is because it begins at $1$ and will keep doubling until doubling would result in being bigger than the array. $1,2,4,...,k$ where $k$ is the largest integer such that $k < n$ and $2k <= n$, $\Theta(log_2 n) = $\Theta(log_2 n)$$
2. The outermost for-loop runs once for every subarray. There are $\frac{n}{2 \text{ subarray size }$ subarrays at any given time. The for loop will process $n$ elements at any iteration so the time complexity is $\Theta(n)$
3. The innermost while-loop and the innermost for-loop handle the merging. In the worst case, the while-loop runs $n$ times and the for-loop also runs $n$ times when shifting the elements. Thus combined they result in $\Theta(n^2)$.

We have $log_2 n$, $n$, and $n^2$, so multiplying those, the time complexity is:

$$
T(n) \in \Theta(n^3 log n)
$$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I originally did this all independently except for using the code in the slides as an outline for my code. When correcting my compexity analysis after the first review, I looked at this repo to help me figure out if mine should be $\Theta (n^2 log n)$ or my original estimate of $\Theta (n^3 log n)$. While our code is similar I still think mine should be $\Theta (n^3 log n)$. 
https://github.com/COSC3020/mergesort-ross223
