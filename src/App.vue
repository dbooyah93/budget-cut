<template>
<h1>Hello World</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    data () {
        return {
            msg: 'Welcome to your Vue.js App',
            year: new Date().getFullYear(),
            months: [
                'January',
                'Feburary',
                'Martch',
                'April',
                'May',
                'June',
                'July',
                'August', 
                'September',
                'October',
                'November',
                'December'
            ],
            month: '',
            listItems: [],
        }
    },
    methods: {
        postListItem: function ( listItem:String ) {
            let request = new XMLHttpRequest();
            let date = new Date().getDay();
            let month = new Date().getMonth();
            let year = new Date().getFullYear();
            if ( listItem !== undefined ) {
                date = Number(listItem.split('/')[0]);
                month = Number(listItem.split('/')[1]);
                year = Number(listItem.split('/')[2]);
            }
            request.addEventListener('load', (event:Event) => {
                if ( event ) {
                    console.log('there was an err');
                    console.trace( event );
                } else {
                    this.getListItems(); // changed variable name for clarity
                    console.log('ok');
                }
            });
            request.addEventListener('error', (err:Event) => {
                console.log({err});
            });
            request.open('POST', 'http://192.168.86.23:3000/' + date + '/' + month + '/' + year);
            request.send();

        },
        getListItems: function () {
            let request = new XMLHttpRequest();
            request.addEventListener('load', (res, err) => {
                if ( err ) {
                    console.log("there was an error");
                } else {
                    this.listItems = JSON.parse(res.target.response).items;
                }
            })
            let month = this.month;
            let year = this.year;
        }
    }
});
</script>

<style scoped lang="sass">
</style>
