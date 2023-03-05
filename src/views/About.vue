<template>
  <div id="about">
    <img src="../assets/nasaLogo.png" id="about_nasa_img"/>
    <div id="about_detail">
      <p>
        NASA, or the National Aeronautics and Space Administration, is a U.S.
        government agency responsible for the country's civilian space program
        and for aeronautics research. It was founded in 1958 as a response to
        the Soviet Union's launch of Sputnik, the first artificial satellite.
        NASA's mission is to drive advances in science, technology, aeronautics,
        and space exploration to enhance knowledge, education, innovation,
        economic vitality, and stewardship of Earth. Its vision is to discover
        and expand knowledge for the benefit of humanity. NASA's current
        missions include sending astronauts to the International Space Station,
        exploring the surface of Mars with rovers and orbiters, studying the
        Earth's atmosphere and climate, developing new technologies for space
        exploration, and collaborating with international partners on space
        projects. NASA also manages a vast array of programs and initiatives,
        including the Hubble Space Telescope, the Chandra X-ray Observatory, the
        Kepler mission to search for exoplanets, and the James Webb Space
        Telescope (set to launch in 2021) to study the early universe. Overall,
        NASA's work is critical to advancing our understanding of the universe
        and our place within it, as well as driving technological innovation and
        inspiring the next generation of scientists and engineers.
      </p>
    </div>
  </div>
</template>

<style>
#about {
  width: 100%;
}

#about_nasa_img {
    width: 35%;
}

#about_detail {
  display: flex;
  justify-content: center;
}

#about_detail > p {
    width: 70%;
}
</style>
