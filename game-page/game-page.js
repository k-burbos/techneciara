const likes = document.querySelectorAll('.likeThisPost')
const dislikes = document.querySelectorAll('.dislikeThisPost')
const messages = document.querySelectorAll('.message')
const gameCards = document.querySelectorAll('.game-card')

likes.forEach((like, index) => {
    like.addEventListener('click', () => {
        const gameCard = gameCards[index]
        const message = messages[index]
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
            const gameCard = gameCards[index]
            const message = messages[index]
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
        const gameCard = gameCards[index]
        const message = messages[index]
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
            const gameCard = gameCards[index]
            const message = messages[index]
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
                    <div><b style="font-size:12px;">goldengailbridge</b></div>
                    <div style="text-align:justify; padding-right: 10px;">looks great howd u find it?</div> 
                </div>
            </div>
           <div style="display:flex;flex-direction:row; align-items:center;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/tetostpn.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">matchalover1005</b></div>
                    <div>i forgor</div> 
                </div>
            </div>
        </div>
    </div>`,
    `<div class="commentsInside">
        <div class="titleofchat">Cat Simulator</div>
        <div class="thecomments" style="display: flex;flex-direction: column; width:100%; height:100%; margin-top: 60px;">
           <div style="display:flex;flex-direction:row; align-items:center;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/tetostpn.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">matchalover1005</b></div>
                    <div>no one requested this</div> 
                </div>
            </div>
            <div style="display:flex;flex-direction:row; align-items:center;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/kittypfp.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">goldengailbridge</b></div>
                    <div>'puter, explode their comp rn</div> 
                </div>
            </div>
            <div style="display:flex;flex-direction:row; align-items:center;border-bottom:2px dotted rgba(119, 119, 119, 0.792); padding-bottom:5px;">
                <div style="margin: 5px 10px 0 10px;"><img src="../images/kittypfp.jpg" height=40px width=40px style="border-radius:100%; border:2px solid black;"></div>
                <div style="display: flex;flex-direction:column;">
                    <div><b style="font-size:12px;">goldengailbridge</b></div>
                    <div>'puter</div> 
                </div>
            </div>
        </div>
    </div>`
]

comments.forEach((comment, index) => {
    comment.addEventListener('click', () => {
        gameCards.forEach((card) => {
            card.classList.remove('chosen')
        })
        const gameCard = gameCards[index]
        commentsActual.innerHTML = commentContext[index]
        gameCard.classList.add('chosen')
    })
});

const bookmarks = document.querySelectorAll('.book-mark')

bookmarks.forEach((bookmark) => {
    bookmark.addEventListener('click', () => {
        if (bookmark.innerHTML == 'bookmark_added') {
            bookmark.classList.add('fade-out')

            setTimeout(() => {
                bookmark.innerHTML = 'bookmark_add'
                bookmark.style.color = 'black'
                bookmark.classList.remove('fade-out')
            }, 300)
        } else {

            bookmark.classList.add('fade-out')

            setTimeout(() => {
                bookmark.innerHTML = 'bookmark_added'
                bookmark.style.color = 'gold'
                bookmark.classList.remove('fade-out')
            }, 300)
        }
    })
})

const reports = document.querySelectorAll('.reportButton')
const reportMessage = document.querySelector('.reported')
const bg = document.querySelector('.black-background')
const okay = document.getElementById('reportedOkay')

reports.forEach((report) => {
    report.addEventListener('click', () => {
        if (report.innerHTML == 'report') {
            reportMessage.classList.add('visible')
            bg.classList.add('visible')
            report.innerHTML = 'report_off'
            report.classList.add('cantReport')
        }
    })
})

okay.addEventListener('click', () => {
    reportMessage.classList.remove('visible')
    bg.classList.remove('visible')
})
