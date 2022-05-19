<template>
    <h1>Active cases by day</h1>
    <h2>Select a date and a country you want to take a look into</h2>
    <br>
    <form>
        <div class="form-group">
            <label for="country">Country</label>
            <select id="country" v-model="formValues.country">
                <option v-for="country in avaliableCountries" :key="country.Slug" :value="country.Slug">
                    <p>{{ country.Country }}</p>
                </option>
            </select>
        </div>
        <div class="form-group">
            <button @click.prevent="getCountry()">Get countries</button>
        </div>
    </form>
    <div v-if="countryData != null">
        <h1 class="country-name">{{ countryData[1].Country }} ({{ countryData[1].Country }})</h1>
        <table class="covid-countries-table">
            <tr>
                <th>Date</th>
                <th>Active cases</th>
            </tr>
            <tr v-for="country in countryData" :key="country.ID">
                <td>{{ new Date(country.Date).toLocaleDateString() }}</td>
                <td>{{ country.Active }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { countriesApi, fetchActiveApi } from '@/config/constants';
import axios from 'axios';
export default {
    name: 'CountryActive',
    data() {
        return {
            avaliableCountries: null,
            countryData: null,
            formValues: {
                country: null,
            }
        }
    },
    mounted() {
        axios.get(countriesApi)
            .then((res) => {
                this.avaliableCountries = res.data
            })
            .catch(err => console.log(err));
    },
    methods: {
        getCountry() {
            let country = this.formValues.country;
            if (country != null) {
                axios.get(fetchActiveApi + country)
                    .then((res) => {
                        this.countryData = res.data
                    })
                    .catch(err => console.log(err));
            }
            else {
                alert('Select a country before preceding')
            }

        },
    }
};


</script>