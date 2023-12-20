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
                            Licence Ouverte / Open Licence version 2.0
                            </a>
                        </code>            
                    </p>
                </div>              
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">ID</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ props.dataset.id }}</p>
                </div>
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Original source') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey text-overflow-ellipsis">
                        <a rel="nofollow" href="https://data.issy.com/explore/dataset/liste-des-equipements-culturels-et-de-loisirs-a-issy-les-moulineaux/">https://data.issy.com/explore/dataset/liste-des-equipements-culturels-et-de-loisirs-a-issy-les-moulineaux/</a>
                    </p>
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
                    <p class="fr-text--sm fr-m-0 text-mention-grey "> 5 juillet 2017</p>
                </div>                  
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Frequency') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">Inconnu</p>
                </div>
            </div>
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                    <h3 class="subtitle fr-mb-1v">{{ $t('Last update') }}</h3>
                    <p class="fr-text--sm fr-m-0 text-mention-grey ">15 décembre 2023</p>
                </div>
            </div>
        </div>
    </section>
    <section class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
        <h2 class="subtitle subtitle--uppercase">Actions</h2>
        <div class="fr-text--sm fr-m-0">
            <h3 class="subtitle fr-mb-1v">{{ $t('Integrate on your website') }}</h3>
            <div class="embed-wrapper">
                <textarea readonly="" id="embed-595c26dea3a7296408d69b7c" rows="1" onclick="this.select();">&lt;div data-udata-dataset="595c26dea3a7296408d69b7c"&gt;&lt;/div&gt;&lt;script data-udata="https://www.data.gouv.fr/" src="https://static.data.gouv.fr/static/oembed.js" async defer&gt;&lt;/script&gt;</textarea>
                <button type="button" class="fr-my-1w fr-mr-1w fr-btn fr-btn--sm fr-btn--contrast fr-icon-clipboard-line" id="595c26dea3a7296408d69b7c-copy" data-clipboard-target="#embed-595c26dea3a7296408d69b7c">Copier ceci</button>
            </div>
        </div>
    </section>
    <!--Here comes the Moissonage-->
    <!--Here comes the statistics-->
</template>

<script setup lang="ts">
import { Dataset } from "../../types/datasets";
const props = defineProps<{dataset: Dataset}>();
</script>