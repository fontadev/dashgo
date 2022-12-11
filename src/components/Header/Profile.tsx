import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align={'center'}
        >
            <Box
                mr={'4'}
                textAlign={'right'}
            >
                <Text>
                    Felipe Fontana
                </Text>
                <Text
                    color={'gray.300'}
                    fontSize={'small'}
                >
                    felip@fontadev.com.br
                </Text>
            </Box>

            <Avatar size={'md'} name={'Felipe Fontana'} src={'https://avatars.githubusercontent.com/u/61684303?v=4'}>

            </Avatar>
        </Flex>
    )
}