<template>
    <div class="price-box">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">注册公司</li>
            <li class="tab-title"  @click="active = 2" :class="{active: active === 2}">工商变更</li>
            <li class="tab-title"  @click="active = 3" :class="{active: active === 3}">注册地址</li>
            <li class="tab-title"  @click="active = 4" :class="{active: active === 4}">核名</li>
        </ul>
        <div class="tab-content">
            <div class="price-header fixed-box">
                <div class="ori-pri">
                    <div class="order-wrap">
                        <div class="order-num">
                            <div class="number">
                                9898人
                            </div>
                            <div class="suc">
                                预定成功
                            </div>
                        </div>
                        <dl class="order-price">
                           <dt>企帮宝价：</dt>
                            <dd>{{computedMoney}}</dd>
                        </dl>
                    </div>
                    <div class="btns-wrap">
                        <div class="btns">
                            <span class="btn-default buy-button">立即预订</span>
                            <span class="btn-default ask-button">咨询客服</span>
                        </div>
                        <div class="service-protect">
                            <i class="iconfont icon-zhongqingdianxinicon01"></i>
                            网上交易保障中心
                        </div>
                    </div>
                </div>
            </div>

            <div class="price-options" v-if="active === 1">
                <Form :model="formItem" :label-width="80" class="pd-20" label-position="left">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-leixing1 default-icon bold-icon"></i>注册类型</span>
                        <Select v-model="formItem.regType" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.regType" :key="index">{{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-heilongjiangtubiao04 default-icon bold-icon"></i>注册区域</span>
                        <Select v-model="formItem.comRegion" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-dizhi default-icon bold-icon"></i>注册地址</span>
                        <RadioGroup v-model="formItem.comAddress" type="button">
                            <Radio :label="formData.comAddress[1]">自有地址</Radio>
                            <Radio :label="formData.comAddress[0]">无地址</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>公司名称</span>
                        <RadioGroup v-model="formItem.name" type="button">
                            <Radio :label="formData.comName[1]">已核实姓名</Radio>
                            <Radio :label="formData.comName[0]">未核实姓名</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>对公户</span>
                        <RadioGroup v-model="formItem.comAccount" type="button">
                            <Radio :label="formData.comAccount[1]">不需要</Radio>
                            <Radio :label="formData.comAccount[0]">需要</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem class="special-padding">
                        <span class="title-label"><i class="iconfont icon-leixing default-icon bold-icon"></i>公司类型</span>
                        <!--<RadioGroup v-model="formItem.comType" type="button" size="large">-->
                            <!--<Radio :label='key' v-for="(value,key,index) in formData.comType" :key="key">{{key}}-->
                            <!--</Radio>-->
                        <!--</RadioGroup>-->
                        <Select  v-model="formItem.comType" class="select-width">
                            <Option :value='key' v-for="(value,key,index) in formData.comType" :key="key">{{key}}</Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>

            <div class="price-options" v-if="active === 2">
                <Form :model="formItem2" :label-width="80" label-position="left">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-heilongjiangtubiao04 default-icon bold-icon"></i>原注册区域</span>
                        <Select v-model="formItem2.Region" style="width:226px">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-leixing default-icon bold-icon"></i>变更类型</span>
                        <CheckboxGroup v-model="formItem2type">
                            <Checkbox label="经营范围" size="large">
                                经营范围
                            </Checkbox>
                            <Checkbox label="法人、董事、监事" size="large">
                                法人、董事、监事
                            </Checkbox>
                            <Checkbox label="股权" size="large">
                                股权
                            </Checkbox>
                            <Checkbox label="注册资金" size="large">
                                注册资金
                            </Checkbox>
                            <Checkbox label="注册地址" size="large">
                                注册地址
                            </Checkbox>
                            <Checkbox label="公司名称" size="large">
                                公司名称
                            </Checkbox>
                            <Checkbox label="五证合一" size="large">
                                五证合一
                            </Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="新注册区域"  v-if="showAddress">
                        <Select v-model="formItem2.comRegion" style="width:200px">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="注册地址" v-if="showAddress">
                        <RadioGroup v-model="formItem2.comAddress" type="button" >
                            <Radio :label="formData.comAddress[1]">自有地址</Radio>
                            <Radio :label="formData.comAddress[0]">无地址</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="注册类型" v-if="showComName">
                        <Select v-model="formItem.regType" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.regType" :key="index">{{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="公司名称" v-if="showComName">
                        <RadioGroup v-model="formItem2.name" type="button">
                            <Radio :label="formData.comName[1]">已核实姓名</Radio>
                            <Radio :label="formData.comName[0]">未核实姓名</Radio>
                        </RadioGroup>
                    </FormItem>
                </Form>
            </div>
            <div class="price-options" v-if="active === 3">
                <Form :model="formItem3" :label-width="80" class="my-form-style">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-leixing default-icon bold-icon"></i>注册区域</span>
                        <Select v-model="formItem3.comRegion" style="width: 224px;">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>
            <div class="price-options" v-if="active === 4">
                <Form :model="formItem4" :label-width="80" class="my-form-style">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-leixing default-icon bold-icon"></i>注册区域</span>
                        <Select v-model="formItem4.comRegion" style="width: 226px;">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>


        </div>
    </div>
</template>

<script>
    import myJson from '~api/price.js'

    export default {
        name: 'price',
        data() {
            return {
                computedPrice: 0,
                formItem: {
                    regType: '有限公司',
                    comRegion: "北京-海淀区",
                    comAddress: 20,
                    name: 20,
                    comType: '科技',
                    comAccount: 20
                },
                formData: myJson,
                formItem2: {
                    Region: '北京-海淀区',
                    comRegion: '',
                    comAddress: '',
                    name: ''
                },
                formItem2type: [],
                showComName: false,
                showAddress: false,
                myTestType: [],
                active: 1,
                formItem3: {
                    comRegion: '北京-海淀区'
                },
                formItem4: {
                    comRegion: '北京-海淀区'
                }
            }
        },
        methods: {
            test() {
                console.log(this.formItem2)
            },
            arrdata(val) {
                console.log(val)
            }
        },
        created() {

        },
        computed: {
            computedMoney() {
                const formItem = this.formItem;
                const formData = this.formData;
                let sum = formData.base
                    + (formData.regType[formItem.regType] || 0)
                    + (formData.comRegion[formItem.comRegion] || 0)
                    + (formItem.comAddress || 0)
                    + (formItem.name || 0)
                    + (formData.comType[formItem.comType] || 0)
                    + (formItem.comAccount || 0)
                return `${sum}.00` || '0.00'
            },
            changePrice() {
                const formItem = this.formItem2;
                const formData = this.formData;
                let sum = formData.base
                        + (formData.comRegion[formItem.comRegion] || 0)
                return sum
            },
            changeAddress() {
                return 9000
            },
            confirmName() {
                return 0
            }
        },
        watch: {
            formItem2type(val) {
                if(val.includes('公司名称')){
                    this.showComName = true;
                }
                else{
                    this.showComName = false;
                    this.formItem2.comRegion = ''
                }
                if(val.includes('注册地址')){
                    this.showAddress = true;
                }
                else{
                    this.showAddress = false;
                    this.formItem2.comAddress = ''
                }
            }
        }
    }
</script>


<style lang="scss">
    @import '../../style/overwriteIview';
    @import '../../style/price.scss';
    $main-color: #39f;
    .price-box {
        float: left;
        margin-top: 15px;
        width: 1226px;
        border: 1px solid #f1f1f1;
    }

    .tab-title-box {
        overflow: hidden;
        .tab-title {
            float: left;
            height: 38px;
            line-height: 38px;
            text-align: center;
            padding: 0 25px;
            color: #39f;
            background: #fff;
        }
        .active {
            background: $main-color;
            color: #fff;
            border: 1px solid #dadada;
            border-bottom: none;
            border-top: none;
        }
    }

    .price-box .tab-content {
        border-top: 3px solid $main-color;
        box-sizing: border-box;
    }



    /*.price-options {*/
        /*padding-top: 15px;*/
    /*}*/

    .computed-price::before {
        content: '￥';
        color: #FF0036;
        font-size: 18px;
        font-family: Arial;
        -webkit-font-smoothing: antialiased;
    }

</style>
