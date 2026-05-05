const likes = document.querySelectorAll('.likeThisPost')
const dislikes = document.querySelectorAll('.dislikeThisPost')
const message = document.querySelector('.message')
const gameCard = document.querySelector('.game-card')

likes.forEach((like, index) => {
    like.addEventListener('click', () => {
        if (like.innerHTML == 'mood_heart') {
            like.classList.add('fade-out')
            message.classList.remove('visible')
            gameCard.classList.remove('visible')
            setTimeout(() => {
                like.innerHTML = 'thumb_up'
                like.classList.remove('selected')
                like.classList.remove('fade-out')
            }, 300)
        } else { // You have liked the post
            like.classList.add('fade-out')
            message.innerHTML = 'You <span style="color: pink">liked</span> this post!'
            message.classList.add('visible')
            gameCard.classList.add('visible')
            setTimeout(() => {
                like.innerHTML = 'mood_heart'
                like.classList.add('selected')
                like.classList.remove('fade-out')
            }, 300)
            const tempdislike = dislikes[index]
            if (tempdislike.innerHTML == 'sentiment_dissatisfied') {
                tempdislike.classList.add('fade-out')
                setTimeout(() => {
                    tempdislike.innerHTML = 'thumb_down'
                    tempdislike.classList.remove('selected')
                    tempdislike.classList.remove('fade-out')
                }, 300)
            }
        }
    })
})

dislikes.forEach((dislike, index) => {
    dislike.addEventListener('click', () => {
        if (dislike.innerHTML == 'sentiment_dissatisfied') {
            dislike.classList.add('fade-out')
            message.classList.remove('visible')
            gameCard.classList.remove('visible')
            setTimeout(() => {
                dislike.innerHTML = 'thumb_down'
                dislike.classList.remove('selected')
                dislike.classList.remove('fade-out')
            }, 300)
        } else {
            dislike.classList.add('fade-out')
            message.innerHTML = 'You <span style="font-weight:bold;">disliked</span> this post.'
            message.classList.add('visible')
            gameCard.classList.add('visible')
            setTimeout(() => {
                dislike.innerHTML = 'sentiment_dissatisfied'
                dislike.classList.add('selected')
                dislike.classList.remove('fade-out')
            }, 300)
             const templike = likes[index]
            if (templike.innerHTML == 'mood_heart') {
                templike.classList.add('fade-out')
                setTimeout(() => {
                    templike.innerHTML = 'thumb_up'
                    templike.classList.remove('selected')
                    templike.classList.remove('fade-out')
                }, 300)
            }
        }
    })
})







const comments = document.querySelectorAll('.comment')
const commentsActual = document.querySelector('.commentsYes')
const inside = document.querySelector('.commentsInside')

const commentContext = [
    `<div class="commentsInside">
        <div class="titleofchat">CubeCraft Survival</div>
        <div class="thecomments" style="display: flex;flex-direction: column; width:100%; height:100%; margin-top: 60px;">
            <div style="display:flex;flex-direction:row;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/kittypfp.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">orangecatwholurks</b></div>
                    <div style="text-align:justify; padding-right: 10px;">The deed you have done, that is to say, bringing forth this multilayered gift to my attention, is one deserving of wondrous praise.</div> 
                </div>
            </div>
           <div style="display:flex;flex-direction:row; align-items:center;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/tetostpn.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">matchalover1005</b></div>
                    <div>translating... "yo chat this is goated acc"</div> 
                </div>
            </div>
        </div>
    </div>`
]

comments.forEach((comment, index) => {
    comment.addEventListener('click', () => {
        commentsActual.innerHTML = commentContext[index]
    })
});
