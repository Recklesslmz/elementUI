<template>
  <div class="resume">
    <div class="resu-h">
    </div>
    <div class="resu-img">
      <img src="http://7xufoi.com1.z0.glb.clouddn.com/cuteCat.jpg">
    </div>
    <div class="resu-production">
      <!--<div class="name">李木子</div>-->
      <!--<div class="slogan">一只很菜的前端攻城狮</div>-->
      <div class="school">
        <span><img class="img" src="http://oqjgod7s1.bkt.clouddn.com/school.png"> </span>
        南京铁道职业技术学院.软件技术.2015届毕业
      </div>
      <div class="link">
        <span>
          <img src="http://oqjgod7s1.bkt.clouddn.com/phone.png">18351816916
        </span>
        <span>
          <img src="http://oqjgod7s1.bkt.clouddn.com/google.png">muzi.sunjing@gmail.com
        </span>
      </div>
      <div class="contact">
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/github.png">
        </div>
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/segmentfault.png">
        </div>
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/weibo.png">
        </div>
      </div>

    </div>
  </div>

</template>
<script type="text/ecmascript-6">

</script>
<style lang="scss">
  .resume {
    width: 70%;
    margin: 0 auto;
    .resu-h {
      width: 100%;
      height: 140px;
      background: #999;
    }
    .resu-img {
      text-align: center;
      margin-top: -50px;
      img {
        width: 90px;
        height: 90px;
        border: 3px solid #fff;
        border-radius: 50%;
      }
    }
    .resu-production {
      text-align: center;
      margin-top: 20px;
      img {
        width: 3%;
        position: relative;
        top: 2px;
      }
      div {
        margin-top: 10px;
      }
      .name {
        font: {
          size: 30px;
        }
      }
      .slogan {
        font: {
          size: 20px;
        }
      ;
      }
      .school {
        color: #666;
      }
      .link {
        margin-top: 25px;
        color: #111;
      }
      .contact {
        width: 20%;
        display: flex;
        margin: 15px auto;
        div {
          img {
            width: 65%;
          }
        }
        &:hover {
          color: red;
        }
      }

    }
  }

</style>
