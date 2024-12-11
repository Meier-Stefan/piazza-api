TC1:  
 Olga, Nick, Mary, and Nestor register and are ready to access the Piazza API.
![TC1](Tests/TC1/Screenshot181056.png)
![TC1](Tests/TC1/Screenshot181126.png)
![TC1](Tests/TC1/Screenshot181144.png)
![TC1](Tests/TC1/Screenshot181204.png)
![TC1](Tests/TC1/Screenshot192518.png)
![TC1](Tests/TC1/Screenshot192552.png)
![TC1](Tests/TC1/Screenshot192615.png)
![TC1](Tests/TC1/Screenshot192633.png)
TC2:  
 Olga, Nick, Mary, and Nestor use the oAuth v2 authorisation service to register and get their tokens.
![TC2](Tests/TC2/Screenshot181709.png)
![TC2](Tests/TC2/Screenshot181756.png)
![TC2](Tests/TC2/Screenshot181932.png)
![TC2](Tests/TC2/Screenshot182001.png)
![TC2](Tests/TC2/Screenshot192725.png)
![TC2](Tests/TC2/Screenshot192813.png)
![TC2](Tests/TC2/Screenshot192859.png)
![TC2](Tests/TC2/Screenshot192928.png)
TC3:  
 Olga makes a call to the API without using her token. This call should be unsuccessful as the user is unauthorised.
![TC3](Tests/TC3/Screenshot193102.png)
TC4:  
 Olga posts a message in the Tech topic with an expiration time (e.g. 5 minutes) using her token. After the end of the expiration time, the message will not accept any further user interactions (likes, dislikes, or comments).
![TC4](Tests/TC4/Screenshot193933.png)
TC5:  
 Nick posts a message in the Tech topic with an expiration time using his token.
![TC5](Tests/TC5/Screenshot193652.png)
TC6:  
 Mary posts a message in the Tech topic with an expiration time using her token.
![TC6](Tests/TC6/Screenshot193415.png)
TC7:  
 Nick and Olga browse all the available posts in the Tech topic; three posts should have zero likes, zero dislikes, and no comments.
![TC7](Tests/TC7/Screenshot194628.png)
![TC7](Tests/TC7/Screenshot195036.png)
TC8:  
 Nick and Olga “like” Mary’s post on the Tech topic.
![TC8](Tests/TC8/Screenshot195511.png)
![TC8](Tests/TC8/Screenshot195607.png)
TC9:  
 Nestor “likes” Nick’s post and “dislikes” Mary’s on the Tech topic.
![TC9](Tests/TC9/Screenshot195741.png)
![TC9](Tests/TC9/Screenshot195908.png)
TC10:  
 Nick browses all the available posts on the Tech topic; at this stage, he can see the number of likes and dislikes for each post (Mary has two likes and one dislike, and Nick has one like). No comments have been made yet.
![TC10](Tests/TC10/Screenshot200046.png)

```
[
    {
        "_id": "6755f4ad9502ff8e22d4ef69",
        "title": "Best invention",
        "text": "What is the best technology invented? Leave it in the comments below.",
        "authorId": "6755f2cf9502ff8e22d4ef5f",
        "authorName": "Mary",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 50,
        "likes": [
            "6755f2969502ff8e22d4ef59",
            "6755f2ba9502ff8e22d4ef5c"
        ],
        "dislikes": [
            "6755f2e29502ff8e22d4ef62"
        ],
        "comments": [],
        "date": "2024-12-08T19:34:05.048Z",
        "__v": 0,
        "active": true,
        "timeLeft": "24 minutes"
    },
    {
        "_id": "6755f5319502ff8e22d4ef6d",
        "title": "I know the best invention",
        "text": "I truly believe that Windows XP was the peak of tech inventions.",
        "authorId": "6755f2ba9502ff8e22d4ef5c",
        "authorName": "Nick",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 50,
        "likes": [
            "6755f2e29502ff8e22d4ef62"
        ],
        "dislikes": [],
        "comments": [],
        "date": "2024-12-08T19:36:17.375Z",
        "__v": 0,
        "active": true,
        "timeLeft": "26 minutes"
    },
    {
        "_id": "6755f5e89502ff8e22d4ef71",
        "title": "Check out that Channel on Youtube",
        "text": "Techworld with Nana: https://www.youtube.com/@TechWorldwithNana",
        "authorId": "6755f2969502ff8e22d4ef59",
        "authorName": "Olga",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 5,
        "likes": [],
        "dislikes": [],
        "comments": [],
        "date": "2024-12-08T19:39:20.568Z",
        "__v": 0,
        "active": false
    }
]
```

TC11:  
 Mary likes her post on the Tech topic. This call should be unsuccessful; in Piazza, a post owner cannot like their messages.
![TC11](Tests/TC11/Screenshot200904.png)
TC12:  
 Nick and Olga comment on Mary’s post on the Tech topic in a round-robin fashion (one after the other, adding at least two comments each).
![TC12](Tests/TC12/Screenshot201502.png)
![TC12](Tests/TC12/Screenshot201636.png)
![TC12](Tests/TC12/Screenshot201815.png)
![TC12](Tests/TC12/Screenshot201921.png)
TC13:  
 Nick browses all the available posts in the Tech topic; at this stage, he can see the number of likes and dislikes of each post and the comments made.
![TC13](Tests/TC13/Screenshot202404.png)

```
[
    {
        "_id": "6755f4ad9502ff8e22d4ef69",
        "title": "Best invention",
        "text": "What is the best technology invented? Leave it in the comments below.",
        "authorId": "6755f2cf9502ff8e22d4ef5f",
        "authorName": "Mary",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 50,
        "likes": [
            "6755f2969502ff8e22d4ef59",
            "6755f2ba9502ff8e22d4ef5c"
        ],
        "dislikes": [
            "6755f2e29502ff8e22d4ef62"
        ],
        "comments": [
            {
                "commentorId": "6755f2ba9502ff8e22d4ef5c",
                "text": "I know it, and by coincidence posted about it... It is Windows XP!",
                "_id": "6755fe28a176b8e27d6cdca9",
                "date": "2024-12-08T20:14:32.467Z"
            },
            {
                "commentorId": "6755f2969502ff8e22d4ef59",
                "text": "I believe you are wrong, Nick! It is cloud computing!",
                "_id": "6755fe92a176b8e27d6cdcaf",
                "date": "2024-12-08T20:16:18.575Z"
            },
            {
                "commentorId": "6755f2ba9502ff8e22d4ef5c",
                "text": "Nono! I believe you are wrong, Olga! There was even a cloud on the default wallpaper of Windows XP!",
                "_id": "6755fefda176b8e27d6cdcb7",
                "date": "2024-12-08T20:18:05.584Z"
            },
            {
                "commentorId": "6755f2969502ff8e22d4ef59",
                "text": "Nick, clouds are mostly made out of linux computers...",
                "_id": "6755ff3fa176b8e27d6cdcc1",
                "date": "2024-12-08T20:19:11.111Z"
            }
        ],
        "date": "2024-12-08T19:34:05.048Z",
        "__v": 0,
        "active": true,
        "timeLeft": "a minute",
        "engagement": 3
    },
    {
        "_id": "6755f5319502ff8e22d4ef6d",
        "title": "I know the best invention",
        "text": "I truly believe that Windows XP was the peak of tech inventions.",
        "authorId": "6755f2ba9502ff8e22d4ef5c",
        "authorName": "Nick",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 50,
        "likes": [
            "6755f2e29502ff8e22d4ef62"
        ],
        "dislikes": [],
        "comments": [],
        "date": "2024-12-08T19:36:17.375Z",
        "__v": 0,
        "active": true,
        "timeLeft": "3 minutes",
        "engagement": 1
    },
    {
        "_id": "6755f5e89502ff8e22d4ef71",
        "title": "Check out that Channel on Youtube",
        "text": "Techworld with Nana: https://www.youtube.com/@TechWorldwithNana",
        "authorId": "6755f2969502ff8e22d4ef59",
        "authorName": "Olga",
        "topic": [
            "6755f202b01558af18266944"
        ],
        "expirationTime": 5,
        "likes": [],
        "dislikes": [],
        "comments": [],
        "date": "2024-12-08T19:39:20.568Z",
        "__v": 0,
        "active": false,
        "engagement": 0
    }
]
```

TC14:  
 Nestor posts a message on the Health topic with an expiration time using her token.
![TC14](Tests/TC14/Screenshot203601.png)
TC15:  
 Mary browses all the available posts on the Health topic; at this stage, she can see only Nestor’s post.
![TC15](Tests/TC15/Screenshot203652.png)
TC16:  
 Mary posts a comment in Nestor’s message on the Health topic.
![TC16](Tests/TC16/Screenshot203901.png)
TC17:  
 Mary dislikes Nestor’s message on the Health topic after the end of post-expiration time. This should fail.
![TC17](Tests/TC17/Screenshot204447.png)
TC18:  
 Nestor browses all the messages on the Health topic. There should be only one post (his own) with one comment (Mary’s).
![TC18](Tests/TC18/Screenshot204607.png)
TC19:  
 Nick browses all the expired messages on the Sports topic. These should be empty.
![TC19](Tests/TC19/Screenshot204810.png)
TC20:  
 Nestor queries for an active post with the highest interest (maximum number of likes and dislikes) in the Tech topic. This should be Mary’s post.
![TC20](Tests/TC20/Screenshot205059.png)
![TC20](Tests/TC20/Screenshot205134.png)
