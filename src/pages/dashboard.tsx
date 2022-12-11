import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

export default function Dasboard() {

    const state = {
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                foreColor: theme.colors.gray[500]
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    color: theme.colors.gray[600]
                },
                axisTicks: {
                    color: theme.colors.gray[600]
                },
                categories: [
                    '2022-12-05 00:00:00.000Z',
                    '2022-12-06 00:00:00.000Z',
                    '2022-12-07 00:00:00.000Z',
                    '2022-12-08 00:00:00.000Z',
                    '2022-12-09 00:00:00.000Z',
                    '2022-12-10 00:00:00.000Z',
                    '2022-12-11 00:00:00.000Z',
                ]
            },
            fill: {
                opacity: 0.3,
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    opacityFrom: 0.7,
                    opacityTo: 0.3,
                },
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 120, 20, 49, 200, 70, 91]
            }
        ]
    };

    return (
        <Flex
            direction={'column'}
            h={'100vh'}>
            <Header />

            <Flex w={'100%'} my={6} maxWidth={1480} mx={'auto'} px={'6'}>

                <Sidebar />

                <SimpleGrid flex={1} gap={4} minChildWidth={'320px'} align={'flex-start'}>
                    <Box
                        p={['6', '8']}
                        bg={'gray.800'}
                        borderRadius={8}
                        pb={4}
                        >
                        <Text fontSize={'lg'} mb={4}>
                            Incritos da semana
                        </Text>
                        <Chart options={state.options} series={state.series} type='area' height={160} />
                    </Box>

                    <Box
                        p={['6', '8']}
                        bg={'gray.800'}
                        borderRadius={8}
                        pb={4}>
                        <Text fontSize={'lg'} mb={4}>
                            Taxa de abertura
                        </Text>
                        <Chart options={state.options} series={state.series} type='area' height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>

        </Flex>
    )

}