window.onload = function(){
    new  Vue({
        el:"#app",
        data:{
            film:filmDetail,
            showBtn: false,
            userInputFlag:false,
            userImgs:userImg,
            chooseIndex:0,
            userComments:[],
            userComment:{
                username:"",
                msg:"",
                userImg:"user1.png",
                createTime:"",
                source:10
            }
        },
        computed:{
            getFilmType(){
                let temp = "";
                for (let i = 0; i < this.film.genres.length; i++) {
                    temp += this.film.genres[i] + " / ";
                }
                return temp.replace(/ \/ $/,"");
            },
            getCasts(){
                let temp = "";
                for (let i = 0; i < this.film.directors.length; i++) {
                    temp += this.film.directors[i].name + "(导演) / ";
                }
                for (let i = 0; i < this.film.casts.length; i++) {
                    temp += this.film.casts[i].name + " / ";
                }
                return temp.replace(/ \/ $/,"");
            },
            getCommentsCount(){
                if(this.film.comments_count>=10000){
                    return Math.round(this.film.comments_count/1000).toFixed(1) + "万";
                }else{
                    return this.film.comments_count;
                }
            },
            getFilmImg(){
                return 'background-image:url('+this.film.images.small+')';
            }
        },
        methods:{
            setComment(){
                this.userComment.createTime = new Date().toLocaleString();
                this.userComments.unshift(this.userComment)
                // JS 的引用类型数据的 内存操作
                this.userComment = {
                    userImg:"user1.png",
                    source:10
                };
            },
            setUserImg(index,userImg){
                console.log(index,userImg);
                this.chooseIndex=index
                this.userComment.userImg = userImg;
            }
        }
    })
}