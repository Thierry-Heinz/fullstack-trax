import Head from 'next/head';
import Image from 'next/image';
import GradientLayout from '../components/gradientLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <GradientLayout
      color="blue"
      title="Thierry Heinz"
      subtitle="profile"
      description="the best!"
      roundImage
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2">
      Hello
    </GradientLayout>
  );
}