import { beautifyDate } from "./beautifyDate.js"
import get from "./getElement.js"
const userContainer = get("#user-container")
const searchBtn = get("#search-btn")

export const displayResult = async (data) => {
  if (data.message) {
    const str = `Search <p
      class="absolute w-auto -left-[calc(100%+24px)] bottom-1/2 translate-y-1/2 text-[#F74646] bg-custom-super-light-gray pointer-events-none "
    >
      No results
    </p>`
    searchBtn.innerHTML = str
    userContainer.innerHTML = ``
    return
  }
  searchBtn.innerHTML = "Search"
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location: lokation,
    blog,
    twitter_username: twitter,
    company,
  } = data
  userContainer.innerHTML = `
  <article
          class="bg-custom-super-light-gray pt-8 px-6 pb-12 sm:p-10 md:p-12 shadow-custom-result rounded-[15px] md:pl-[202px] md:relative"
        >
          <!-- avatar info -->
          <div class="flex items-center gap-[19px] sm:gap-10">
            <!-- avatar image -->
            <img
              class="h-[70px] w-[70px] sm:h-[117px] sm:w-[117px] rounded-full md:absolute md:left-12 md:top-12"
              src=${avatar_url}
              alt="avatar logo"
            />
            <!-- user info -->
            <div class="md:flex md:justify-between md:w-full md:-mt-[7.5px]">
              <div>
                <!-- name -->
                <h2
                  class="font-bold text-custom-darkest-one text-base sm:text-[26px] sm:leading-[39px]"
                >
                  ${name}
                </h2>
                <!-- username -->
                <p
                  class="text-[13px] sm:text-base sm:mt-0.5 text-custom-blue"
                >
                  @${login}
                </p>
              </div>
              <!-- join date -->
              <span
                class="mt-[6px] sm:mt-1 text-custom-gray text-[13px] sm:text-[15px] sm:leading-[22px] md:m-0"
                >Joined ${beautifyDate(created_at)}
              </span>
            </div>
          </div>
          <!-- bio -->
          <p
            class="mt-[33px] leading-[25px] text-[13px] text-custom-blue-gray sm:text-[15px] md:mt-5"
          >
            ${
              bio
                ? bio
                : `<span class="opacity-75">This profile has no bio</span>`
            }
          </p>
          <!-- stats -->
          <section
            class="mt-[23px] sm:mt-8 bg-custom-very-light-gray rounded-[10px] py-[18px] px-[15px] sm:py-[15px] sm:px-8 md:pt-[15px] md:pb-[17px] grid grid-cols-3 sm:justify-items-start"
          >
            <!-- single stat -->
            <div
              class="flex flex-col gap-2 sm:gap-0 md:gap-[1px] items-center sm:items-start"
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize"
              >
                repos
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px]"
                >${public_repos}</span
              >
            </div>
            <!-- end of stat -->
            <!-- single stat -->
            <div
              class="flex flex-col gap-2 sm:gap-0 items-center sm:items-start"
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize"
              >
                followers
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px]"
                >${followers}</span
              >
            </div>
            <!-- end of stat -->
            <!-- single stat -->
            <div
              class="flex flex-col gap-2 sm:gap-0 items-center sm:items-start"
            >
              <p
                class="text-[11px] sm:text-[13px] sm:leading-[19px] text-custom-blue-gray capitalize"
              >
                following
              </p>
              <span
                class="text-custom-dark-gray font-bold text-base sm:text-[22px] sm:leading-[33px]"
                >${following}</span
              >
            </div>
            <!-- end of stat -->
          </section>

          <!-- addresses -->
          <footer
            class="mt-6 sm:mt-[30px] columns-1 sm:columns-2 space-y-[17px]"
          >
            <!-- location -->
            <div class="${lokation ? "" : "opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full"
                src="./assets/images/icon-location.svg"
                alt=""
              />
              <span class="text-custom-blue-gray">${
                lokation ? lokation : `Not Available`
              }</span>
            </div>
            <!-- github blog -->
            <div class="${blog ? "" : "opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full"
                src="./assets/images/icon-website.svg"
                alt=""
              />
              <span class="text-custom-blue-gray">${
                blog ? blog : `Not Available`
              }</span>
            </div>
            <!-- twitter -->
            <div class="${twitter ? "" : "opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full"
                src="./assets/images/icon-twitter.svg"
                alt=""
              />
              <span class="text-custom-blue-gray">${
                twitter ? twitter : `Not Available`
              }</span>
            </div>
            <!-- github -->
            <div class="${company ? "" : "opacity-50"} relative pl-[33px]">
              <img
                class="absolute left-0 bottom-0 top-0 object-cover h-full"
                src="./assets/images/icon-company.svg"
                alt=""
              />
              <span class="text-custom-blue-gray">${
                company ? company : `Not Available`
              }</span>
            </div>
          </footer>
        </article>
  `
}
