<template>
    <div class="price-box clear-fixed">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">法律服务</li>
        </ul>
        <div class="tab-content">
            <com-price>{{computedMoney}}</com-price>

            <div class="price-options" v-if="active === 1">
                <Form :model="formModel" class="pd-20">
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>服务类型</span>
                        <RadioGroup v-model="formModel.serviceType" size="large" type="button">
                            <Radio label="1">
                                合同章程
                            </Radio>
                            <Radio label="2">
                                法律维护
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>代理类型</span>
                        <Select>
                            <Option value="合同撰写"></Option>
                            <Option value="合同审核"></Option>
                            <Option value="合伙协议"></Option>
                            <Option value="股权协议"></Option>
                            <Option value="公司章程"></Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <span class="title-label"><i class="iconfont icon-mingcheng-copy default-icon bold-icon"></i>代理类型</span>
                        <Select>
                            <Option value="法律维权"></Option>
                            <Option value="律师函"></Option>
                            <Option value="法律顾问"></Option>
                            <Option value="电话咨询"></Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 1,
                formModel: {
                    serviceType: '',
                    agencyType: ''
                }
            }
        },
        computed: {
            computedMoney () {
               return '0.00'
            }
        }
    }
</script>


<style lang="scss">
    @import '../../style/price';
    @import '../../style/overwriteIview';

</style>
