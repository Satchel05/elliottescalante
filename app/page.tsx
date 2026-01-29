import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* HERO SECTION */}
      <section className='min-h-screen flex flex-col justify-center items-center px-4 bg-muted/80'>
        <section className='min-h-[60vh] flex flex-col justify-center items-center px-4 py-16'>
          {/* <div className="max-w-3xl text-center"> */}
          <div className='flex flex-wrap flex-col items-start'>
            <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Elliott Escalante
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-2'>
              Computer Science @ UC Irvine '27
            </p>
            <p className='text-muted-foreground mb-8'>
              Developer Lead @ Commit The Change
            </p>
            {/* </div> */}

            <div className='sm:flex sm:flex-row sm:flex-wrap sm:gap-3 sm:justify-center flex flex-col flex-wrap gap-3'>
              <Button
                asChild
                size='lg'>
                <a href='#projects'>View Projects</a>
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild>
                <a href='mailto:elliottsatchel@gmail.com'>
                  <Mail className='mr-2 h-4 w-4' />
                  Contact
                </a>
              </Button>
              <div className='flex justify-center'>
                <div className='sm:block hidden'>
                  <Button
                    variant='ghost'
                    size='lg'
                    asChild>
                    <a
                      href='https://github.com/Satchel05'
                      target='_blank'>
                      <Github className='h-5 w-5' />
                    </a>
                  </Button>
                  <Button
                    variant='ghost'
                    size='lg'
                    asChild>
                    <a
                      href='https://www.linkedin.com/in/elliott-escalante-97510324a/'
                      target='_blank'>
                      <Linkedin className='h-5 w-5' />
                    </a>
                  </Button>
                </div>
                <div className='sm:hidden flex gap-2'>
                  <Button
                    variant='outline'
                    size='lg'
                    asChild>
                    <a
                      href='https://github.com/Satchel05'
                      target='_blank'>
                      <Github className='mr-2 h-4 w-4' />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    asChild>
                    <a
                      href='https://www.linkedin.com/in/elliott-escalante-97510324a/'
                      target='_blank'>
                      <Linkedin className='mr-2 h-4 w-4' />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className='px-4 py-16'>
          <div className='max-w-3xl mx-auto'>
            {/* <h2 className="text-3xl font-bold mb-6">About</h2> */}
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Hey! I'm Elliott, a software developer at UC Irvine who loves
              building products for the web from start to finish.
              <br />
              <br />
              I’m looking for summer internships at companies that pay close
              attention to excellence in their craft and investment in their
              interns.
            </p>
          </div>
        </section>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id='projects'
        className='px-4 py-16 min-h-screen flex flex-col justify-center items-center'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold mb-15 text-center'>Projects</h2>

          <div className='grid md:grid-cols-2 gap-6'>
            {/* CARD 1 */}
            <Card className='overflow-hidden p-0 hover:shadow-lg transition-shadow'>
              {/* Image */}
              <div className='relative h-56 bg-muted overflow-hidden'>
                <Image
                  src='/clchc-logo.webp'
                  alt='Project screenshot'
                  fill
                  className='object-contain scale-80'
                />
              </div>

              {/* Content */}
              <CardContent className='p-6 space-y-4'>
                {/* Title */}
                <div>
                  <h3 className='text-xl font-bold mb-1'>
                    Commit The Change x CLCHC
                  </h3>
                  <p className='text-muted-foreground'>
                    Quota tracking platform supporting 30+ hospital
                    practitioners
                  </p>
                </div>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>Node.js</Badge>
                  <Badge variant='secondary'>PostgreSQL</Badge>
                </div>

                {/* Links */}
                <div className='flex gap-2 pt-2'>
                  {/* <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/..." target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                  <Button
                    variant='outline'
                    size='sm'
                    asChild>
                    <a
                      href='https://github.com/ctc-uci/clchc'
                      target='_blank'>
                      <Github className='mr-2 h-4 w-4' />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CARD 2 */}

            <Card className='overflow-hidden p-0 hover:shadow-lg transition-shadow'>
              {/* Image */}
              <div className='relative h-56 bg-muted overflow-hidden'>
                <Image
                  src='/center-stage-no-bg.png'
                  alt='Project screenshot'
                  fill
                  className='object-contain scale-75'
                />
              </div>

              {/* Content */}
              <CardContent className='p-6 space-y-4'>
                {/* Title */}
                <div>
                  <h3 className='text-xl font-bold mb-1'>
                    Commit The Change x Center Stage Dance Studio
                  </h3>
                  <p className='text-muted-foreground'>
                    Platform easing onboarding burden between staff and 100+
                    students
                  </p>
                </div>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>Node.js</Badge>
                  <Badge variant='secondary'>PostgreSQL</Badge>
                </div>

                {/* Links */}
                <div className='flex gap-2 pt-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    asChild>
                    <a
                      href='https://github.com/ctc-uci/Center-Stage'
                      target='_blank'>
                      <Github className='mr-2 h-4 w-4' />
                      Code
                    </a>
                  </Button>
                  <Button
                    size='sm'
                    asChild>
                    <a
                      href='https://medium.com/@committhechange.uci/project-overview-center-stage-647aa0458aa5'
                      target='_blank'>
                      <ExternalLink className='mr-2 h-4 w-4' />
                      Medium Page
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className='px-4 py-16 bg-muted/80'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Let's Build Something Dope.
          </h2>
          <br />

          <div className='flex flex-wrap gap-3 justify-center'>
            <Button
              size='lg'
              asChild>
              <a href='mailto:elliottsatchel@gmail.com'>
                <Mail className='mr-2 h-4 w-4' />
                elliottsatchel@gmail.com
              </a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild>
              <a
                href='https://github.com/Satchel05'
                target='_blank'>
                <Github className='mr-2 h-4 w-4' />
                GitHub
              </a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild>
              <a
                href='https://www.linkedin.com/in/elliott-escalante-97510324a/'
                target='_blank'>
                <Linkedin className='mr-2 h-4 w-4' />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='px-4 pt-0 pb-6 text-center text-sm text-muted-foreground bg-muted/80'>
        <p>
          Built with Next.js and shadcn/ui • © {new Date().getFullYear()}{' '}
          Elliott Escalante
        </p>
      </footer>
    </main>
  );
}
