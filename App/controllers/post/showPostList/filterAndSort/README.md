## Sorting and Filtering

The filters and sort objects are passed to the function:

```
    const filterAndSort = async ({ filters, sort }) => {
```

Declare `statusFilter` to use later locally and delete it from the 'filter' object. Now the 'filter object can be sent to the database withouth confusing it:

```
    const statusFilter = filters.active;
    delete filters.active;
```

If we plan to sort by 'interest' later, we can not send the filter to the database, because it does not know what 'interest' is:

```
    const filteredPosts =
      sort === "interest"
        ? await Post.find(filters).limit(15).lean()
        : await Post.find(filters).sort(sort).limit(15).lean();
```

Here the posts in the array get some properties added that are needed for local processing:

```
    const enhancedPosts = addStatusAndEngagement(filteredPosts);
```

Only if we sort by 'interest', the `enhancedPosts` need to be sorted, else they were already sorted by the database earlier.

```
    const postsToDisplay =
      sort === "interest" ? sortByInterest(enhancedPosts) : enhancedPosts;
```

Finally, we check whether the posts need to be filtered by status. If that is the case, the `postsToDisplay` will be filered again before returning. Else, nothing happend and the `postsToDisplay` will be returned as they are now.

```
    if (statusFilter !== undefined) {
      return filterByStatus({
        posts: postsToDisplay,
        statusFilter,
      });
    }

    return postsToDisplay;
};
```
