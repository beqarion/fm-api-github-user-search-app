import get from "./getElement.js"
const userContainer = get("#user-container")

export const fetchUser = async (url) => {
  userContainer.innerHTML = `
  <!-- loading -->
        <div class="text-center text-custom-blue-gray font-bold">
          Loading...
        </div>
  `
  try {
    const resp = await fetch(url, { cache: "no-cache" })
    const data = await resp.json()
    return data
  } catch (error) {
    userContainer.innerHTML = `
    <!-- error text -->
    <div class="text-center text-custom-blue-gray font-bold">
      <p>There was an error: ${error}</p>
    </div>
    `
  }
}
