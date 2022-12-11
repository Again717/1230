<template>
<div class="loading">
    <div class="loading-con">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
    </div>
        <p>Loading...</p>
    </div>
</template>

<style scoped>
.loading-con{
    width: 50px;
    height: 50px;
    position: relative;
    margin: 20px auto;
    z-index: 10000;
}
.loading-item{
    width: 100%;
    height: 100%;
    position: absolute;
    animation: spinner 3.5s linear infinite;
}
.loading-item::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgb(12, 152, 245)
}
.loading-con:nth-child(1){
    animation-delay: 0s;
}
.loading-con div:nth-child(2){
    animation-delay: 0.1s;
}
.loading-con div:nth-child(3){
    animation-delay: 0.2s;
}
.loading-con div:nth-child(4){
    animation-delay: 0.3s;
}
.loading-con div:nth-child(5){
    animation-delay: 0.4s;
}

@keyframes spinner{
    0%{
        transform: rotate(0deg);
        opacity: 1;
    }
    70%{
        transform: rotate(540deg);
        opacity: 1;
    }
    79%{
        opacity: 1;
    }
    80%{
        transform: rotate(720deg);
        opacity: 0;
    }
    100%{
        transform: rotate(810deg);
        opacity: 0;
    }
}
.loading p{
    margin-top: 10px;
    text-align: center;
    color: #9c9c9c;
    font-weight: 300;
}

</style>
