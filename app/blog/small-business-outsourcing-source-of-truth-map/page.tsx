import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','small-business-outsourcing-source-of-truth-map');
export default function Page(){return renderAug19Article('blog','small-business-outsourcing-source-of-truth-map')}
