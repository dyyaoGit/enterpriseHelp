<template>
    <div class="price-box">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">商标注册</li>
        </ul>
        <div class="tab-content">
            <div class="price-header">
                <com-price>
                    <span v-text="computedMoney" v-if="active === 1"></span>
                </com-price>
            </div>

            <div class="price-options" v-if="active === 1">
                <Form :model="formItem" :label-width="80">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>代理类型</span>
                        <RadioGroup size="large" type="button" v-model="formItem.type">
                           <Radio label="商标注册">商标注册</Radio>
                           <Radio label="加急商标注册">加急商标注册</Radio>
                           <Radio label="商标变更">商标变更</Radio>
                           <Radio label="商标转让">商标转让</Radio>
                           <Radio label="疑难商标注册">疑难商标注册</Radio>
                        </RadioGroup>
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
                    type: ''
                },
                formData: myJson,
                active: 1
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
