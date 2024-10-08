<script>
import Modal from "./components/Modal.vue";
import CardList from "./components/CardList.vue";
import Discount from "./components/Discount.vue";
import data from "./assets/data.js";
export default {
    name: "App",
    data() {
        return {
            init: [...data],
            products: data,
            menu: ["Home", "about", "contact"],
            count: new Array(data.length).fill(0),
            name: "홍길동",
            modalBox: false,
            selectProduct: null,
            showDiscount: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showDiscount = false;
        }, 2000);
    },
    components: {
        Modal,
        CardList,
        Discount,
    },
    created() {
        console.log("App created");
    },
    methods: {
        logPrint() {
            console.log("로그출력");
        },
        counter(index) {
            this.count[index]++;
        },
        openModal(index) {
            this.modalBox = true;
            this.selectProduct = index;
        },
        closeModal() {
            this.modalBox = false;
        },
        sortLowPrice() {
            this.products.sort((a, b) => Number(a.price) - Number(b.price));
        },
        sortHighPrice() {
            this.products.sort((a, b) => Number(b.price) - Number(a.price));
        },
        sortId() {
            this.products.sort((a, b) => Number(a.id) - Number(b.id));
        },
        sortHighDiscount() {
            this.products.sort(
                (a, b) => Number(b.discount) - Number(a.discount)
            );
        },
        sortReset() {
            this.products = [...this.init];
        },
    },
};
</script>

<template>
    <div id="app">
        <Discount v-if="showDiscount" />

        <ul class="menu">
            <li v-for="(ele, i) in menu" :key="i">
                <a :href="ele">{{ ele }}</a>
            </li>
        </ul>

        <Transition name="fade">
            <Modal
                v-if="modalBox"
                :products="products"
                :modalBox="modalBox"
                :selectProduct="selectProduct"
                @close-Modal="closeModal"
            />
        </Transition>

        <button @click="sortLowPrice">낮은 가격순 정렬</button>
        <button @click="sortHighPrice">높은 가격순 정렬</button>
        <button @click="sortId">등록순 정렬</button>
        <button @click="sortHighDiscount">높은 할인률 정렬</button>
        <button @click="sortReset">초기 데이터 순</button>

        <CardList
            v-for="(p, i) in products"
            :key="i"
            :product="p"
            :index="i"
            @open-modal="openModal"
        />

        <button @click="logPrint">로그출력</button>
    </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: 0.3s;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.menu {
    display: flex;
    gap: 1rem;
}
.txt1 {
    color: red;
}
</style>
