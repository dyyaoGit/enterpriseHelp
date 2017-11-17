<template>
    <div class="price-box">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">代理记账</li>
            <li class="tab-title"  @click="active = 2" :class="{active: active === 2}">税务代办</li>
            <li class="tab-title"  @click="active = 3" :class="{active: active === 3}">财务审计</li>
            <li class="tab-title"  @click="active = 4" :class="{active: active === 4}">社保代理</li>
        </ul>
        <div class="tab-content">
            <div class="price-header">
                <dl class="ori-pri">
                    <dt>
                        企帮宝价：
                    </dt>
                    <dd>
                        <span class="computed-price" v-text="computedMoney" v-if="active === 1"></span>
                        <span class="computed-price" v-text="changePrice" v-if="active === 2"></span>
                        <span class="computed-price" v-text="changeAddress" v-if="active === 3"></span>
                        <span class="computed-price" v-text="confirmName" v-if="active === 4"></span>
                    </dd>
                </dl>

            </div>

            <div class="price-options" v-if="active === 1">
                <Form :model="formItem" :label-width="80">
                    <FormItem label="注册区域">
                        <Select v-model="formItem.comRegion" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.regType" :key="index">{{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="记账类型">
                        <RadioGroup size="large">
                            <Radio>
                                小规模记账
                            </Radio>
                            <Radio>
                                一般纳税人记账
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="服务时间">
                        <RadioGroup v-model="formItem.comAddress" type="button">
                            <Radio :label="formData.comAddress[1]">3个月</Radio>
                            <Radio :label="formData.comAddress[0]">6个月</Radio>
                            <Radio :label="2">12个月</Radio>
                        </RadioGroup>
                    </FormItem>

                    <Button size="large" type="primary" style="margin-left:  20px;">
                        立即预定
                    </Button>
                </Form>
            </div>
            <div class="price-options" v-if="active === 2">
                <Form :model="formItem2" :label-width="80" label-position="left" style="padding: 20px;">
                    <FormItem label="注册区域">
                        <Select v-model="formItem2.Region" style="width:200px">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="代办类型" >
                        <CheckboxGroup v-model="formItem2type">
                            <Checkbox label="税控代办+票种核定" size="large">
                                税控代办+票种核定
                            </Checkbox>
                            <Checkbox label="申办一般纳税人" size="large">
                                申办一般纳税人
                            </Checkbox>
                            <Checkbox label="报税系统解锁" size="large">
                                报税系统解锁
                            </Checkbox>
                            <Checkbox label="发票赠版/增量" size="large">
                                注册资金
                            </Checkbox>
                            <Checkbox label="代开增值税专用发票" size="large">
                                注册地址
                            </Checkbox>
                            <Checkbox label="税控机托管" size="large">
                                税控机托管
                            </Checkbox>
                            <Checkbox label="银行票据托管" size="large">
                                银行票据托管
                            </Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <Button size="large" type="primary">
                        立即预定
                    </Button>
                </Form>
            </div>
            <div class="price-options" v-if="active === 3">
                <Form :model="formItem3" :label-width="80" class="my-form-style">
                    <FormItem label="注册区域">
                        <Select v-model="formItem3.comRegion" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="代办类型">
                        <RadioGroup type="button">
                            <Radio>
                                验资报告
                            </Radio>
                            <Radio>
                                专项审计
                            </Radio>
                            <Radio>
                                年度报表审计
                            </Radio>
                            <Radio>
                                税审
                            </Radio>
                            <Radio>
                                评估报告
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <Button size="large" type="primary" style="margin-left: 10px;">
                        立即预定
                    </Button>
                </Form>
            </div>
            <div class="price-options" v-if="active === 4">
                <Form :model="formItem4" :label-width="80" class="my-form-style">
                    <FormItem label="注册区域">
                        <Select v-model="formItem4.comRegion" style="width: 300px;">
                            <Option :value="key" v-for="(value,key,index) in formData.comRegion" :key="index">
                                {{key}}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="代理类型">
                        <RadioGroup type="button">
                            <Radio>
                                社保开户
                            </Radio>
                            <Radio>
                                社保托管
                            </Radio>
                            <Radio>
                                公积金开户
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <Button size="large" type="primary" style="margin-left: 10px;">
                        立即预定
                    </Button>
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


<style lang="scss" scoped>
    @import '../../style/price';

</style>
