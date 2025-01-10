import { useDark } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';

export function useLogo() {
    const isDark = useDark();
    const logo = ref(
        'https://img.freepik.com/premium-psd/3d-money-coin-bank-saving-icon_148391-583.jpg?w=740',
    );

    watch(isDark, (newValue) => {
        if (newValue)
            logo.value =
                'https://img.freepik.com/premium-psd/3d-bitcoin-bank-icon-illustration_148391-2132.jpg?w=740';
        else
            logo.value =
                'https://img.freepik.com/premium-psd/3d-money-coin-bank-saving-icon_148391-583.jpg?w=740';
    });

    onMounted(() => {
        if (isDark.value)
            logo.value =
                'https://img.freepik.com/premium-psd/3d-bitcoin-bank-icon-illustration_148391-2132.jpg?w=740';
        else
            logo.value =
                'https://img.freepik.com/premium-psd/3d-money-coin-bank-saving-icon_148391-583.jpg?w=740';
    });

    return logo;
}
