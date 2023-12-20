<template>
    <section class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">  
        <h2 class="subtitle subtitle--uppercase">{{ $t('Informations') }}</h2>
        <div class="fr-text--sm fr-m-0">
            <div class="fr-grid-row fr-grid-row--gutters">     
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('License') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">
                        <code class="bg-alt-grey fr-px-1v text-grey-380">
                            <a href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">
                            {{ props.dataset.license }}
                            </a>
                        </code>            
                    </p>
                </div>              
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">ID</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ props.dataset.id }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
        <h2 class="subtitle subtitle--uppercase">{{ $t('Temporality') }}</h2>
        <div class="fr-text--sm fr-m-0">
            <div class="fr-grid-row fr-grid-row--gutters">   
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Creation') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ props.dataset.created_at }}</p>
                </div>                  
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Frequency') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ props.dataset.frequency }}</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Last update') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ props.dataset.last_update }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
        <h2 class="subtitle subtitle--uppercase">Actions</h2>
        <div class="fr-text--sm fr-m-0">
            <h3 class="subtitle fr-mb-1v">{{ $t('Integrate on your website') }}</h3>
            <div class="embed-wrapper">
                <textarea readonly="true" id="embed-copy" rows="1" v-model="embedText" onclick="this.select();"></textarea>
                <CopyButton class="fr-my-1w fr-mr-1w" :text="embedText"/>
            </div>
        </div>
    </section>
    <!--Here comes the extras-->
    <!--Here comes the moissonage-->
    <!--Here comes the statistics-->
    <!--Here comes the stats-->
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Dataset } from "../../types/datasets";
import CopyButton from "../CopyButton/CopyButton.vue";
const props = defineProps<{dataset: Dataset}>();
const embedText = ref<string>(
    `<div data-udata-dataset="${props.dataset.id}"></div>` + '<' + 'script data-udata="https://www.data.gouv.fr/" src="https://static.data.gouv.fr/static/oembed.js" async defer><' + '/script>'
);
</script>