const countdown=()=>{
    const upperdate=new Date('mar 30 , 2022 00:00:00').getTime();
    const currentdate=new Date().getTime();
    const diffdate=upperdate-currentdate;

    const seconad=1000;
    const mint=seconad*60;
    const hour=mint*60;
    const days=hour*24;

    const remain_day=Math.floor(diffdate/days);
    const remain_hour=Math.floor((diffdate%days)/hour);
    const remain_mint=Math.floor((diffdate%hour)/mint);
    const remain_second=Math.floor((diffdate%mint)/seconad);

    var d=document.getElementById('day');
    var h=document.getElementById('hour');
    var m=document.getElementById('mint');
    var s=document.getElementById('second');
    
    d.innerHTML=remain_day;
    h.innerHTML=remain_hour;
    m.innerHTML=remain_mint;
    s.innerHTML=remain_second;



}
setInterval(countdown,1000);
