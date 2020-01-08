<template>
  <div class='UMap' :class="{'fullPage': isFullPage}" :style="styleObj ? styleObj : ''">
    <div class="map-tendx" id="map-container"></div>
    <div class="school-menu">
      <div class="school-title">请选择您所在的区域</div>
      <ul class="school-list">
        <li @click="searchSchool(school)" v-for="school in list" :key="school.title">
          <h3>{{school.title}}</h3>
          <p>{{school.address}}</p>
        </li>
      </ul>
      <div class="school-line"></div>
    </div>
    <div class="bottom-btns">
      <i class="el-marker el-icon-rank" @click="fullPageMap"></i>
    </div>
  </div>
</template>
<script>
  import { TMap } from '../utils'
  import schoolMixin from '../mixins/schoolMixin'

  export default {
    props: {
      styleObj: {
        type: Object
      }
    },
    name: 'UMap',
    data() {
      return {
        isZoomChange: true,
        isFullPage: false,
        map: null,
        citylocation: null, // 城市信息查询服务
        geocoder: null, // 地址解析对象
        center: null, // 地图中心
        markers: [],
        infoWindows: [],
        isGetLocation: false, // 标识获取当前位置是否需要获取数据
        areaData: []
      }
    },
    mixins: [schoolMixin],
    mounted() {
      TMap('OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77').then(qq => {
        this.center = new qq.maps.LatLng(23.15984, 112.894691);
        this.map = new qq.maps.Map(document.getElementById('map-container'), {
          center: this.center, // 地图的中心地理坐标。
          zoom: 16, // 地图的中心地理坐标。
          disableDefaultUI: true // 禁止所有控件
        });
        qq.maps.event.addListener(this.map, 'zoom_changed', data => {
          this.mapZoomChange(this.map.getZoom(), this.map.getCenter())
        });
        // 设置城市信息查询服务
        this.citylocation = new qq.maps.CityService();
        // 请求成功回调函数
        this.citylocation.setComplete(result => {
          console.log(result)
          this.center = result.detail.latLng
          this.map.setCenter(result.detail.latLng);

        });
        // 请求失败回调函数
        this.citylocation.setError(function() {
          console.log('出错了，请输入正确的经纬度！！！');
        });
        this.citylocation.searchLocalCity();
      })
    },
    methods: {
      fullPageMap() {
        this.isFullPage = !this.isFullPage
        this.$nextTick(() => {
          qq.maps.event.trigger(this.map, 'resize')
        })
      },
      searchSchool(item) {
        let lat = null
        let lng = null
        this.geocoder = new qq.maps.Geocoder();
        this.geocoder.setComplete(result => {
          console.log(result.detail.location)
          lat = result.detail.location.lat
          lng = result.detail.location.lng
          this.createMarker(lat, lng, item)
        });
        this.geocoder.getLocation(item.address)
      },
      createMarker(lat, lng, item) {
        console.log(lat, lng)
        const _this = this
        // 创建一个Marker
        const marker = new qq.maps.Marker({
          // 设置Marker的位置坐标
          position: new qq.maps.LatLng(lat, lng),
          // 设置显示Marker的地图
          map: this.map
        });

        // 设置Marker的可见性，为true时可见,false时不可见，默认属性为true
        marker.setVisible(true);
        // 设置Marker的动画属性为从落下
        marker.setAnimation(qq.maps.MarkerAnimation.DOWN);
        this.markers.push(marker)

        // 标记Marker点击事件
        qq.maps.event.addListener(marker, 'click', function() {
          _this.clearOverlays(_this.infoWindows)
          _this.createInfoWindow(lat, lng, _this.map, item)
        });
      },
      createInfoWindow(lat, lng, map, msg) {

      },
      // 清除覆盖物
      clearOverlays(overlays) {
        let overlay;
        // eslint-disable-next-line no-cond-assign
        while (overlay = overlays.pop()) {
          overlay.setMap(null);
          // overlay.destroy && overlay.destroy()
        }
      },
      mapZoomChange(zoom, center) {
        console.log(zoom, center)
        if (!this.isZoomChange) return false
        // 地址和经纬度之间进行转换服务
        this.geocoder = new qq.maps.Geocoder();
        // 设置服务请求成功的回调函数
        this.geocoder.setComplete(result => {
          console.log(result)
          if (result.detail.addressComponents.province != '广东省') {
            return this.$message({
              message: '地图偏离广东省范围，请调整地图中心',
              type: 'warning'
            });
          }
          const params = {
            province: '广东省',
            city: '',
            area: '',
            street: ''
          }
          if (zoom <= 8 && this.level != '1') {
            this.level = '0'
          } else if (zoom > 8 && zoom <= 10 && this.level != '2') {
            this.level = '1'
            params.city = result.detail.addressComponents.city
          } else if (zoom > 10 && zoom <= 12 && this.level != '3') {
            this.level = '2'
            params.city = result.detail.addressComponents.city
            params.area = result.detail.addressComponents.district
          } else if (zoom > 12 && this.level != '4') {
            this.level = '3'
            params.city = result.detail.addressComponents.city
            params.area = result.detail.addressComponents.district
            params.street = result.detail.addressComponents.town || result.detail.addressComponents.street
          }
        });
        // 若服务请求失败，则运行以下函数
        this.geocoder.setError(function() {

        });
        this.geocoder.getAddress(center);
      }
    }
  }
</script>
<style scoped lang='less'>
  @import "../styles/common.less";
  @schoolTitle: #009b4c;
  @color: #f08519;

  .UMap{
    // width: 100%;
    height: 550px;
    position: relative;
    margin-left: -20px;
    margin-right: -20px;
    .map-box, .map-tendx{
      width: 100%;
      height: 100%;
    }
    &.fullPage{
      position: fixed;
      width: 100% !important;
      height: 100vh;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      margin: 0;
      padding: 0 !important;
    }
  }
  .school-menu{
    position: absolute;
    right: 50px;
    top:70px;
    z-index: 100;
    display: inline-block;
    width: 250px;
    color: #fff;
    .school-title{
      line-height: 36px;
      background-color: @schoolTitle;
      text-align: center;
      border-radius: 4px;
    }
    .school-list{
      li{
        background-color: @color;
        margin-top: 5px;
        font-size: 14px;
        line-height: 24px;
        padding: 5px;
        cursor: pointer;
        h3{
          font-weight: normal;
        }
      }
    }
    .school-line{
      height: 12px;
      background-color: @color;
      width: 100%;
      margin-top: 5px;
    }
  }
  .bottom-btns{
    position: absolute;
    right: 50px;
    bottom: 30px;
    z-index: 100;
    .el-marker{
      padding:10px;
      border:1px solid @fontColor;
      border-radius: 50%;
      cursor: pointer;
    }
  }
</style>
