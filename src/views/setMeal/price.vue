<template>
    <div class="price-box">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">创业套餐</li>
        </ul>
        <div class="tab-content">

            <com-price>
                <span v-text="computedMoney" v-if="active === 1"></span>
            </com-price>

            <div class="price-options" v-if="active === 1">
                <Form :model="formItem" label-position="left">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-leixing1 default-icon bold-icon"></i>套餐类型</span>
                        <Select v-model="formItem.comRegion" style="width: 300px;">
                            <Option :value="1">
                                主推套餐A-注册 + 地址<1年> + 代理记账<1年>
                            </Option>
                            <Option :value="2">
                                主推套餐B-注册 + 银行开户 + 代理记账<1年>
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
                    <FormItem class="special-padding" >
                        <span class="title-label"><i class="iconfont icon-leixing default-icon bold-icon"></i>注册类型</span>
                        <Select  v-model="formItem.comType" class="select-width" style="width: 300px;">
                            <Option :value='key' v-for="(value,key,index) in formData.comType" :key="key">{{key}}</Option>
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
                formItem: {
                    regType: '有限公司',
                    comRegion: "北京-海淀区",
                    comAddress: 20,
                    name: 20,
                    comType: '科技'
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
                return sum || 0
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
    @import '../../style/price';
</style>
