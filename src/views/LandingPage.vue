<template>
    <h1>Hello and welcome, explore the covid cases</h1>
    <br />
    <br />
    <h1>Global summary</h1>
     <table class="summary-table">
        <tr>
        <th>New confirmed</th>
        <th>New deaths</th>
        <th>New recovered</th>
        <th>Total confirmed</th>
        <th>Total deaths</th>
        <th>Total recovered</th>
        </tr>
        <tr>
        <td>{{ globalSummary.NewConfirmed}}</td>
        <td>{{ globalSummary.NewDeaths}}</td>
        <td>{{ globalSummary.NewRecovered}}</td>
        <td>{{ globalSummary.TotalConfirmed}}</td>
        <td>{{ globalSummary.TotalDeaths}}</td>
        <td>{{ globalSummary.TotalRecovered}}</td>
        </tr>
    </table>
    <table class="covid-countries-table">
        <tr>
        <th>Country</th>
        <th>New confirmed</th>
        <th>New deaths</th>
        <th>New recovered</th>
        <th>Total confirmed</th>
        <th>Total deaths</th>
        <th>Total recovered</th>
        </tr>
        <tr v-for="country in countryData" :key="country.ID">
        <td>{{ country.Country}}({{country.CountryCode}})</td>
        <td>{{ country.NewConfirmed}}</td>
        <td>{{ country.NewDeaths}}</td>
        <td>{{ country.NewRecovered}}</td>
        <td>{{ country.TotalConfirmed}}</td>
        <td>{{ country.TotalDeaths}}</td>
        <td>{{ country.TotalRecovered}}</td>
        </tr>
    </table>
</template>

<script>
import { summaryApi } from '@/config/constants'
import axios from 'axios'

    export default {
        data() {
            return {
                globalSummary: [],
                countryData: [],
            }
        },
        mounted() {
            axios.get(summaryApi)
                .then((res) => {
                    this.globalSummary = res.data.Global
                    this.countryData = res.data.Countries
                    console.log(res.data.Countries)

                })
                .catch(err => console.log(err));
        }
    }
</script>