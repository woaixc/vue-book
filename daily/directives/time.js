let Time = {
    //返回时间戳
    getUnix(){
        let date = new Date();
        return date.getTime();
    },
    //获取今天0点0分0秒的时间戳
    getTodayUnix(){
        let date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取今年1月1日0点0分0秒的时间戳
    getYearUnix(){
        let date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0)
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取标准年月日
    getLastDate(time){
        let date = new Date(time);
        let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1)
            : date.getMonth + 1; 
        let day = date.getDate() < 10 ? '0' + date.getDate()
            : date.getDate(); 
        return date.getFullYear + '-' + month + '-' + day;
    },
    //转换时间
    getFormatTime(timestamp){
        let now = this.getUnix();
        let today = this.getTodayUnix();
        let year = this.getYearUnix();
        let timer = (now - timestamp)/1000;
        let tip = '';

        if(timer <= 0){
            tip = '刚刚';
        }else if (Math.floor(timer/60) <= 0){
            tip = '刚刚';
        }else if (timer < 3600) {
            tip = Math.floor(timer/60) + '分钟前';
        }else if (timer >= 3600 && (timestamp-today >= 0)){
            tip = M
        }
    }
}

export default {
    bind: function (el, binding ) {
        el.innerHTML = Time.getFormatTime(binding.value * 1000);
        //创建定时器60秒刷新一次
        el.__timeout__ = setInterval ( () => {
            el.innerHTML = Time.getFormatTime(binding.value * 1000);
        },60000);
    },
    unbind: function (el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
}