"use client"
import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconNews,
} from "@tabler/icons-react";
import classes from "./footer.module.css";

const links = [
  { link: "#", label: "Contato" },
  { link: "#", label: "Privacidade" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Loja" },
  { link: "#", label: "Carreira" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group gap={4}>
          <IconNews stroke={2} />
          <p className="font-bold">BRASIL TIMES</p>
        </Group>
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
