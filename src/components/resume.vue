<template>
<div class="resume">
  <div class="resu-h">
  </div>
  <div class="resu-production">
    <div class="name">李木子</div>
    <div class="slogan">一只很菜的前端攻城狮</div>
    <div class="school">
      <span><img class="img" src="http://oqjgod7s1.bkt.clouddn.com/school.png"> </span> 南京铁道职业技术学院.软件技术.2015届毕业
    </div>
    <div class="link">
      <span>
          <img src="http://oqjgod7s1.bkt.clouddn.com/phone.png"><span class="link-common">18351816916</span>
      </span>
      <span>
          <img src="http://oqjgod7s1.bkt.clouddn.com/google.png"><span class="link-common">muzi.sunjing@gmail.com</span>
      </span>
    </div>
    <div class="contact">
      <div>
        <a href="https://github.com/Recklesslmz"><img src="http://oqjgod7s1.bkt.clouddn.com/github.png"></a>
      </div>
      <div>
        <a href="https://segmentfault.com/u/limuzi">  <img src="http://oqjgod7s1.bkt.clouddn.com/segmentfault.png"></a>
      </div>
      <div>
        <a href="http://weibo.com/recklesslmz"><img src="http://oqjgod7s1.bkt.clouddn.com/weibo.png"></a>
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
            margin: {
                top: 15px;
            };
            font: {
                size: 20px;
            };
        }
        .school {
            color: #666;
        }
        .link {
            margin-top: 25px;
            color: #111;
            img {
                width: 25px;
                padding: {
                    left: 10px;
                }
            }
            .link-common {
                @extend .school;
                padding: {
                    left: 5px;
                }
            }
        }
        .contact {
            width: 20%;
            display: flex;
            margin: 15px auto;
            div {
                img {
                    width: 65%;
                    cursor: pointer;
                }
            }
            &:hover {
                color: red;
            }
        }

    }
}
</style>
