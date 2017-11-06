<template>
  <div class="software-summary">
    <div class="software-header header">
        专业的您， 需要专业的软件
    </div>
    <div class="software-description description">
      <div>我们致力于帮助商家从传统的以商品为中心的经营模式向以客户为中心的现代经营模式转变，
        提供营销管理、数据精准分析、精准营销、活动管理、线上/线下商品管理、O2O交易管理、进销存管理、
        会员及客户管理等新零售核心运营工具，丰富企业主及商家运用互联网工具进行高效运营，提升营收、降低成本。
      </div>
      <div>
        如果您是酒店宾馆、餐饮店、婚庆店、汽车店、美容美发店、儿童乐园店、健身、培训、小商铺、杂货店及其他中小企业， 
        不妨试试腾宣威客户管理系列软件，我们所提供的帮助不止一点点!
      </div>
      
    </div>

    <div class="software-content-pc">
      <el-row :gutter="20">
        <el-col :span="12">
          <card title="智慧商圈客户管理软件" @view="$router.push({name: 'zhihuishangquan'})"
           content="基于小V宝商圈引流能力开展会员积分和精准分析、精准营销、互动营销等服务" color="#B33390" style="height: 220px"></card>
        </el-col>
        <el-col :span="12">
          <card title="智慧会展客户管理软件" @view="$router.push({name: 'zhihuihuizhan'})"
           content="为客户提供精准营销服务、促进贸易配对、创造新商机的智慧软件" color="#4734B2" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="8">
          <card title="智慧商家版客户管理软件" @view="$router.push({name: 'shangjiaban'})"
           content="超越电商和店商之间的二次思维，帮助老板解决客户管理、客户营销、客户管理、库存管理的一站式线上/线下管理平台，通过大数据智能分析能力等新零售能力。" color="#7C33B3" style="height: 220px"></card>
        </el-col>
        <el-col :span="8">
          <card title="连锁版客户管理软件" @view="$router.push({name: 'liansuoban'})"
           content="全国刷卡消费一卡通、数据及功能共享，仅需一根网线" color="#3487B3" style="height: 220px;"></card>
        </el-col>
        <el-col :span="8">
          <card title="商家联盟客户管理软件" @view="$router.push({name: 'shangjialianmeng'})"
           content="针对商家联盟客户积分打折、商家返利结算的一项管理系统" color="#6CB235" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="8">
          <card title="教育培训客户管理软件" @view="$router.push({name: 'jiaoyupeixun'})"
           content="通过线上和线下融合，通过互动营销进行引流和二次精准营销，提升营收和利润。" color="#D7D8D9" style="height: 220px"></card>
        </el-col>
        <el-col :span="8">
          <card title="酒店商城客户管理软件" @view="$router.push({name: 'jiudianshangcheng'})"
           content="部署新零售产品，酒店可以改变传统房间摆放东西的模式，客人入住可以扫码线上购物，方便管理，
丰富商品种类，减少不必要库存，后期也可以代卖周边的商家产品。" color="#34B283" style="height: 220px;"></card>
        </el-col>
        <el-col :span="8">
          <card title="超市商城客户管理软件" @view="$router.push({name: 'chaoshishangcheng'})"
           content="部署新零售产品，改变传统门店的客户流有限问题，消费即会员，管理客户关系，同时转换美团等客户到自有平台，降低每笔成本，管理所有客户数据。" color="#B0B234" style="height: 220px;"></card>
        </el-col>
      </el-row>
    </div>

    <div class="software-content-mobile">
      <el-row :gutter="20">
        <el-col :span="24">
          <card title="智慧商圈客户管理软件" @view="$router.push({name: 'zhihuishangquan'})"
           content="基于小V宝商圈引流能力开展会员积分和精准分析、精准营销、互动营销等服务" color="#B33390" style="height: 220px"></card>
        </el-col>

      </el-row>
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="智慧会展客户管理软件" @view="$router.push({name: 'zhihuihuizhan'})"
           content="为客户提供精准营销服务、促进贸易配对、创造新商机的智慧软件" color="#4734B2" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="智慧商家版客户管理软件" @view="$router.push({name: 'shangjiaban'})"
           content="超越电商和店商之间的二次思维，帮助老板解决客户管理、客户营销、客户管理、库存管理的一站式线上/线下管理平台，通过大数据智能分析能力等新零售能力。" color="#7C33B3" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="连锁版客户管理软件" @view="$router.push({name: 'liansuoban'})"
           content="全国刷卡消费一卡通、数据及功能共享，仅需一根网线" color="#3487B3" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
         <card title="商家联盟客户管理软件" @view="$router.push({name: 'shangjialianmeng'})"
          content="针对商家联盟客户积分打折、商家返利结算的一项管理系统" color="#6CB235" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="教育培训客户管理软件" @view="$router.push({name: 'jiaoyupeixun'})"
           content="通过线上和线下融合，通过互动营销进行引流和二次精准营销，提升营收和利润。" color="#D7D8D9" style="height: 220px"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="酒店商城客户管理软件" @view="$router.push({name: 'jiudianshangcheng'})"
           content="部署新零售产品，酒店可以改变传统房间摆放东西的模式，客人入住可以扫码线上购物，方便管理，
丰富商品种类，减少不必要库存，后期也可以代卖周边的商家产品。" color="#34B283" style="height: 220px;"></card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <card title="超市商城客户管理软件" @view="$router.push({name: 'chaoshishangcheng'})"
           content="部署新零售产品，改变传统门店的客户流有限问题，消费即会员，管理客户关系，同时转换美团等客户到自有平台，降低每笔成本，管理所有客户数据。" color="#B0B234" style="height: 220px;"></card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'IndexSoftwareSummary',
  components: {
    card: Card
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .software-content-pc {
    display: none;
  }
  .software-content-mobile {
    margin-top: 50px;
  }

  .software-description {
    text-align: left;
  }
}

@media (min-width: 600px) {
  .software-content-mobile {
    display: none;
  }
  .software-content-pc {
    margin-top: 50px;
  }
}

.software-summary {
  margin-top: 40px;

  .software-header {
    .software-description {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
