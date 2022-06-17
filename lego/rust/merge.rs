// Author: Ben Peterson
// This code is heavily based on the pseudocode provided by wikipedia
// https://en.wikipedia.org/wiki/Merge_sort

fn main() {
    let mut arr: [i32; 10] = [3,5,8,23,14,46,25,0,12,35];
    let mut work_arr: [i32; 10] = [0;10];
    println!("Unsorted Array: {:?}", arr);
    println!("Running mergesort...");
    merge(&mut arr, &mut work_arr, 10);
    println!("Sorted Array: {:?}", arr);

}

// This is a top-down implementation
fn merge(to_sort: &mut [i32], work_arr: &mut [i32], n: usize)
{
    copy_array(to_sort, 0, n, work_arr);
    top_down_split_merge(work_arr, 0, n, to_sort);
}

fn copy_array(a: &mut [i32], i_begin: usize, i_end: usize, b: &mut [i32])
{
    for k in i_begin..i_end
    {
        b[k] = a[k];
    }
}

fn top_down_split_merge(b: &mut [i32], i_begin: usize, i_end: usize, a: &mut [i32])
{
    if i_end - i_begin <= 1
    {
        return;
    }
    let i_middle = (i_end + i_begin) / 2;
    // Recursively split the array into smaller and smaller pieces until there's only 1 element per split
    top_down_split_merge(a, i_begin, i_middle, b);
    top_down_split_merge(a, i_middle, i_end, b);

    // merge these sub-arrays into each other
    top_down_merge(b, i_begin, i_middle, i_end, a);
}

fn top_down_merge(a: &mut [i32], i_begin: usize, i_middle: usize, i_end: usize, b: &mut [i32])
{
    let mut i = i_begin;
    let mut j = i_middle;

    // I'll be honest.  I'm a little RUSTy when it comes to remebering how this part works ;)
    for k in i_begin..i_end
    {
        // If i is in the first half of the array and is less than the value in the runner watching the second half of the array,
        // add that smaller value to the next spot in the working array
        if i < i_middle && (j >= i_end || a[i] <= a[j])
        {
            b[k] = a[i];
            i+=1;
        }
        else
        {
            // If right runner was smaller, set that to the next spot in the working array
            b[k] = a[j];
            j += 1;
        }
    }
}