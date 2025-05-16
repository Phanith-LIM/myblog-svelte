<script lang="ts">
    import * as config from '$lib/config';
</script>

<svelte:head>
    <title>It's me</title>
    <meta name="description" content={config.description} />
</svelte:head>

<div class="max-w-(--breakpoint-md) mx-auto px-2 md:px-0">
    <div class="col-start-2">
        
    </div>
    <!-- About Me Section -->
    <div>
        <h2 class="mb-16 font-geistSans font-semibold">About Me (a.k.a Why I Exist)</h2>
        <div class="motion-safe:animate-enter" style="animation-delay: 100ms">
            Hey there! I'm Phanith Lim, but you can also call me <span class="font-semibold underline underline-offset-4">nil</span> , your friendly neighborhood software engineer. I spend my days wrestling with Flutter 2+ (it’s like regular Flutter, but with more magic). I also have a borderline obsession with Machine Learning and Natural Language Processing—because teaching computers to understand humans is the ultimate challenge, right?
        </div>
        <br>
        <div class="motion-safe:animate-enter" style="animation-delay: 200ms">
            This blog exists because my brain is too full of random thoughts, and I needed a place to dump them. I'm all about learning new things, making mistakes (lots of them), and occasionally pretending I know what I’m doing. Got an idea? Hit me up, let's build something awesome—or at least break something spectacular together!
        </div>
        <br>
        <div class="motion-safe:animate-enter" style="animation-delay: 300ms">
            <div >And now, a quote to make me sound deep:</div>
            <blockquote class="mt-6 border-l-2 pl-6 italic">
                "Don't be a part of the problem, be the whole problem." - XD
            </blockquote>
        </div>
    </div>

    <!-- Skills Section -->
    <div class="motion-safe:animate-enter" style="animation-delay: 400ms">
        <h3 class="mt-8 font-semibold">My Superpowers (a.k.a Skills)</h3>
        <ul class="list-disc pl-6">
            <li>Flutter & Dart – I build apps, not birdhouses (yet).</li>
            <li>Machine Learning – Training models and my patience simultaneously.</li>
            <li>Googling – 90% of coding, 10% crying.</li>
            <li>Asking ChatGPT – Because sometimes even Stack Overflow needs a break.</li>
        </ul>
    </div>

    <!-- Tech Stack Section -->
    <div class="motion-safe:animate-enter" style="animation-delay: 700ms">
        <h3 class="mt-8 font-semibold">Tech Stack (aka my toolkit for world domination)</h3>
        <ul class="list-disc pl-6">
            <li>Flutter & Dart – Mobile development magic (I swear it’s like wizardry).</li>
            <li>Python – My trusty sidekick for ML and AI experiments (also good for snacks).</li>
            <li>PyTorch – Because I like to make machines smarter... or at least less dumb.</li>
            <li>NestJS – Backend with more structure than my life.</li>
            <li>FastAPI – APIs so fast, they might just outrun me.</li>
            <li>SvelteKit – Full-stack wizardry with zero fluff.</li>
            <li>GitHub & GitLab – Version control and collaboration at its finest (and where I spend most of my "productive" time).</li>
            <li>Docker – Containerizing everything, even my problems.</li>
        </ul>
    </div>

    <!-- Fun GIF Section -->
    <div class="motion-safe:animate-enter mt-8 w-full lg:w-auto" style="animation-delay: 900ms">
        <h3 class="mt-8 font-semibold">It works on my machine.</h3>
        <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlkbjVlMDZtMG9lZG0ybXUzZ2p3c2xxam1xYW1vM2U4OWkzdXJlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ij8AeeqXKFZm0/giphy.gif" 
            alt="Me debugging at 3AM"
            class="rounded-lg shadow-lg w-full lg:w-auto"
        >
    </div>
</div>
