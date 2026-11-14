import { Composition, registerRoot } from 'remotion';
import { Trailer, TRAILER_FRAMES } from './Trailer';

function Root() {
    return <Composition id="Trailer" component={Trailer} durationInFrames={TRAILER_FRAMES} fps={30} width={1280} height={720} />;
}

registerRoot(Root);
