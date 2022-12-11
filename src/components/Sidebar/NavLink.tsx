import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavSectionProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavSectionProps) {
    return (
        <Link href={href} passHref>
            <ChakraLink display={'flex'} align={'center'} {...rest}>
                <Icon as={icon} fontSize={20}></Icon>
                <Text ml={4} fontWeight={'medium'}>{children}</Text>
            </ChakraLink>
        </Link>
    )
}