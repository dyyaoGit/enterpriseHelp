<template>
    <div class="price-box clear-fixed">
        <ul class="tab-title-box">
            <li class="tab-title"  @click="active = 1" :class="{active: active === 1}">法律服务</li>
        </ul>
        <div class="tab-content">
            <com-price>{{computedMoney}}</com-price>

            <div class="price-options" v-if="active === 1">
                <Form :model="formModel" class="pd-20">
                    <FormItem label="服务类型">
                        <RadioGroup v-model="formModel.serviceType" size="large">
                            <Radio label="1">
                                合同章程
                            </Radio>
                            <Radio label="2">
                                法律维护
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="代理类型">
                        <CheckboxGroup>
                            <Checkbox>合同撰写</Checkbox>
                            <Checkbox>合同审核</Checkbox>
                            <Checkbox>合伙协议</Checkbox>
                            <Checkbox>股权协议</Checkbox>
                            <Checkbox>公司章程</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="代理类型">
                        <CheckboxGroup>
                            <Checkbox>法律维权</Checkbox>
                            <Checkbox>律师函</Checkbox>
                            <Checkbox>法律顾问</Checkbox>
                            <Checkbox>电话咨询</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <Button size="large" type="primary">
                        立即预定
                    </Button>
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


<style scoped lang="scss">
    @import '../../style/price';

</style>
