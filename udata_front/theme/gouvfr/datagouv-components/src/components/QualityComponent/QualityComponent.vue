<template>
    <div class="fr-grid-row fr-grid-row--middle flex-sm text-grey-500 not-enlarged">
        <div class="fr-grid-row fr-grid-row--middle fr-ml-n1v">
        <ToggleTip
            class="fr-btn fr-btn--tertiary-no-outline fr-btn--secondary-grey-500 fr-icon-info-line"
        >
            {{$t('Metadata quality:')}}
            <template #toggletip>
                <h5 class="fr-text--sm fr-my-0">{{$t("Metadata quality:")}}</h5>
                <QualityItem
                    :passed="quality.dataset_description_quality"
                    :messagePassed='$t("Data description filled")'
                    :messageFailed='$t("Data description empty")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.resources_documentation"
                    :messagePassed='$t("Files documented")'
                    :messageFailed='$t("Files documentation missing")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.license"
                    :messagePassed='$t("License filled")'
                    :messageFailed='$t("No license set")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.update_frequency && !!quality.update_fulfilled_in_time"
                    :messagePassed='$t("Update frequency followed")'
                    :messageFailed='quality.update_frequency ? $t("Update frequency not followed") : $t("Update frequency not set")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.has_open_format"
                    :messagePassed='$t("File formats are open")'
                    :messageFailed='$t("File formats are closed")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.temporal_coverage"
                    :messagePassed='$t("Temporal coverage filled")'
                    :messageFailed='$t("Temporal coverage not set")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.spatial"
                    :messagePassed='$t("Spatial coverage filled")'
                    :messageFailed='$t("Spatial coverage not set")'
                    class="fr-my-1w"
                />
                <QualityItem
                    :passed="quality.all_resources_available"
                    :messagePassed='$t("All files are available")'
                    :messageFailed='$t("Some files are unavailable")'
                    class="fr-my-1w"
                />
                <div class="fr-grid-row fr-grid-row--right not-enlarged">
                    <a
                    :href="config.guides_quality_url"
                    target="_blank"
                    rel="noopener"
                    :title="$t('Learn more about this indicator - opens a new window')"
                    >
                    {{$t("Learn more about this indicator")}}
                    </a>
                </div>
            </template>
        </ToggleTip>
        <p class="fr-m-0 fr-mr-1v">
            {{$t('Metadata quality:')}}
        </p>
        </div>
        <QualityScore :score="quality.score"/>
        <div v-if="!quality.dataset_description_quality" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p
                class="fr-my-0 fr-text--sm"
            >
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("Data description empty")}}
            </p>
        </div>
        <div v-if="!quality.resources_documentation" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p
                class="fr-my-0 fr-text--sm"
            >
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("Files documentation missing")}}
            </p>
        </div>
        <div v-if="!quality.update_frequency && quality.update_fulfilled_in_time" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p
                class="fr-my-0 fr-text--sm"
            >
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{
                quality.update_frequency
                    ? $t("Update frequency not followed")
                    : $t("Update frequency not set")
                }}
            </p>
        </div>
        <div v-if="!quality.has_open_format" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p class="fr-my-0 fr-text--sm">
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("File formats are closed")}}
            </p>
        </div>
        <div v-if="!quality.temporal_coverage" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p class="fr-my-0 fr-text--sm">
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("Temporal coverage not set")}}
            </p>
        </div>
        <div v-if="!quality.spatial" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p class="fr-my-0 fr-text--sm">
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("Spatial coverage not set")}}
            </p>
        </div>
        <div v-if="!quality.all_resources_available" class="text-default-warning fr-grid-row fr-grid-row--middle fr-m-1v">
            <p
                class="fr-my-0 fr-text--sm"
            >
                <span
                class="fr-icon-warning-line fr-icon--sm"
                aria-hidden="true"
                ></span>
                {{$t("Some files are unavailable")}}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { QualityScore}  from '../QualityScore/';
import { QualityItem } from '../QualityItem/';
import { ToggleTip } from '../ToggleTip/';
import { config } from '../../config';
import type { Quality } from '../../types/datasets';
defineProps<{
    quality: Quality
}>();
</script>