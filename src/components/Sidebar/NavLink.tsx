import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavSectionProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...rest }: NavSectionProps) {
    return (
        <Link display={'flex'} align={'center'} {...rest}>
            <Icon as={icon} fontSize={20}></Icon>
            <Text ml={4} fontWeight={'medium'}>{children}</Text>
        </Link>
    )
}