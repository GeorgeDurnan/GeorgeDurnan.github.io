projects = document.querySelectorAll(".project")

const projectImages = ["/Resources/media/projectScreenshots/cheatSheet.png", "/Resources/media/projectScreenshots/styleGuide.png", "/Resources/media/projectScreenshots/nooshe.png", "/Resources/media/projectScreenshots/random.png","/Resources/media/projectScreenshots/redditClient.png"]

projects.forEach((project, index) => {
    project.addEventListener("mouseenter", () => {
        document.getElementById("frame").style.display = "block"
        document.getElementById("frame").src = projectImages[index]
    })
});
document.getElementById("projectList").addEventListener("mouseleave", () => {
    document.getElementById("frame").style.display = "none"
})
