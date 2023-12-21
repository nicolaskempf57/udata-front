<template>
    <div class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">  
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
    </div>
    <div class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
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
    </div>
    <div class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
        <h2 class="subtitle subtitle--uppercase">Actions</h2>
        <div class="fr-text--sm fr-m-0">
            <h3 class="subtitle fr-mb-1v">{{ $t('Integrate on your website') }}</h3>
            <div class="embed-wrapper">
                <textarea readonly="true" id="embed-copy" rows="1" v-model="embedText" onclick="this.select();"></textarea>
                <CopyButton class="fr-my-1w fr-mr-1w" :text="embedText"/>
            </div>
        </div>
    </div>
    <!--Here comes the extras-->
    <article v-if="props.dataset?.harvest" :class="{'drop-shadow': expanded}">
        <header
            class="fr-p-5v fr-grid-row fr-grid-row--middle no-wrap wrap-md justify-between border-default-grey"
            :class="{'border-bottom': !expanded}"
        >
            <div class="fr-col-auto fr-grid-row fr-grid-row--top no-wrap">
                <div class="fr-col-auto">
                    <h2 class="subtitle subtitle--uppercase">{{ $t('Harvest') }}</h2>
                </div>
            </div>
            <div class="fr-col-auto fr-ml-auto">
                <div class="fr-grid-row fr-grid-row--middle no-wrap wrap-md">
                    <button
                        @click="expand"
                        role="button"
                        :aria-expanded="expanded"
                        class="fr-btn fr-btn--tertiary-no-outline fr-btn--icon-left fr-btn--secondary-grey-500"
                        :class="{'fr-icon-arrow-up-s-line': expanded, 'fr-icon-arrow-down-s-line': !expanded}"
                    >
                        <template v-if="expanded">
                            {{ $t('Close details') }}
                        </template>
                        <template v-else>
                            {{ $t('See harvest') }}
                        </template>
                    </button>
                </div>
            </div>
        </header>
        <div
            class="accordion-content"
            ref="contentRef"
        >
            <div class="fr-pb-3w fr-mb-3w border-bottom border-default-grey">
                <div class="fr-grid-row fr-grid-row--gutters fr-text--sm fr-m-0">
                    <div v-for="(value, key) in props.dataset?.harvest" :key="key" class="fr-col-12 fr-col-sm-6 fr-col-md-4">
                        <h3 class="subtitle fr-mb-1v">{{ key }}</h3>
                        <p class="fr-text--sm fr-m-0 text-mention-grey ">{{ value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <!--Here comes the stats-->
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Dataset } from "../../types/datasets";
import CopyButton from "../CopyButton/CopyButton.vue";
import { toggleAccordion } from "../../helpers/toggleAccordion";
import { templateRef } from "@vueuse/core";
const props = defineProps<{dataset: Dataset}>();
const embedText = ref<string>(
    `<div data-udata-dataset="${props.dataset.id}"></div>` + '<' + 'script data-udata="https://www.data.gouv.fr/" src="https://static.data.gouv.fr/static/oembed.js" async defer><' + '/script>'
);
const contentRef = templateRef<HTMLElement | null>("contentRef");
const expanded = ref(false);
const expand = () => {
  expanded.value = !expanded.value;
  if(contentRef.value) {
    toggleAccordion(contentRef.value, expanded.value);
  }
}
</script>