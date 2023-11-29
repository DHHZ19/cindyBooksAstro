import { IMG } from "./Insatgram.astro";

<Fragment>
  <div>
    {IMG.map((el: any) => (
      <Fragment>
        <div class="p-4">
          {
            <Fragment>
              <section class="flex w-full flex-col gap-y-4 md:gap-y-0">
                <div class="w-fit flex-1 gap-x-4">
                  <img class="h-32 w-32 rounded-lg" src={el.media_url} alt="" />
                  <div class="max-h-24 basis-1/2"></div>
                </div>
              </section>
            </Fragment>
          }
          ))
        </div>
      </Fragment>
    ))}
  </div>
</Fragment>;
