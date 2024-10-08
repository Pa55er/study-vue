<script>
export default {
    name: "Modal",
    props: ["products", "modalBox", "selectProduct"],
    data() {
        return {
            count: 1,
        };
    },
    watch: {
        count(newValue, oldValue) {
            if (isNaN(newValue)) {
                alert("숫자만 입력해주세요");
                this.count = oldValue;
            } else this.count = newValue;
        },
    },
    emits: ["close-Modal"],
    methods: {
        closeModal() {
            this.$emit("close-Modal");
        },
    },
};
</script>

<template>
    <div class="modal" v-if="modalBox">
        <div class="_inner">
            <h2>{{ products[selectProduct].title }}</h2>
            <p class="img">
                <img :src="`/src/assets/${products[selectProduct].img}`" />
            </p>
            <button class="btnClose" @click="closeModal">닫기</button>
            <p>
                {{ Number(products[selectProduct].price).toLocaleString() }}원
            </p>
            <p>{{ products[selectProduct].discount }} %</p>
            <p>{{ products[selectProduct].category }}</p>
            <p><input type="text" v-model="count" /> - {{ count }}</p>
            <p>
                총 결제 금액 :
                {{
                    Number(
                        products[selectProduct].price * count
                    ).toLocaleString()
                }}
                원
            </p>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal ._inner {
    background-color: white;
    padding: 1rem;
    position: relative;
}
.img img {
    width: 100px;
}
.btnClose {
    position: absolute;
    right: 0;
    top: -3rem;
}
</style>
