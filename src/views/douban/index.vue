<template>
  <div id="demssço">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 class="middle" style="line-height: 36px; color: #20A0FF">{{msg}}</h1>
      </div>

      <el-table :data="articles"  style="width: 100%;margin:0px auto;">

        <el-table-column    label="ID"  width="100">
          <template scope="scope">
            {{scope.row.id}}
          </template>
        </el-table-column>

        <el-table-column  label="标题" width="120">
          <template scope="scope">
            {{scope.row.title}}
          </template>
        </el-table-column>

        <el-table-column  label="评分" width="80">
          <template scope="scope">
            {{scope.row.rating.average}}
          </template>
        </el-table-column>

        <el-table-column  label="年份" width="80">
          <template scope="scope">
            {{scope.row.year}}
          </template>
        </el-table-column>

        <el-table-column  label="封面" >
          <template scope="scope">
            <img class="filmcover" :src="scope.row.images.small" />
          </template>
        </el-table-column>

      </el-table>
    </el-card>




  </div>
</template>


<script>
  import DemoComm from './demoComponent.vue'
  export default {
    name:'demoIndex',
    data () {
      return {
        msg: '豆瓣电影排行榜!',
        articles:[]
      }
    },
    components: { DemoComm },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
//        headers: {
//
//        },
//        emulateJSON: true
    }).then(function(response){
        this.articles = response.data["subjects"]
          console.log(this.articles)
    }, function(response){
        // 这里是处理错误的回调
        console.log(response)
      });
    }

  }
</script>

<style scoped>
  .filmcover{
    width:30px;
  }


</style>

