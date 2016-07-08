# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.create!(username: 'demo', password: 123123)

# Restaurant.create!(name: "Osteria Francescana", chef: "Massimo Bottura", cuisine: "Italian", capacity: 40, description: "A hyper-modern take on classic Italian cuisine")
# Restaurant.create!(name: "Blue Hill Restaurant", chef: "Dan Barber", cuisine: "Local Farm to Table - New York", capacity: 100, description: "A farmer's feast of beautiful and respectfully raised local produce")
# Restaurant.create!(name: "El Restaurante Patagonia Sur", chef: "Francis Mallman", cuisine: "Argentinian & Patagonian", capacity: 50, description: "A modern haute-cuisine presentation of Patagonia & Argentina's bounty")
# Restaurant.create!(name: "N/Naka", chef: "Niki Nakayama", cuisine: "Japanese", capacity: 35, description: "A modern Kaiseki rendition that focuses on a story told through its dishes")
# Restaurant.create!(name: "Attica", chef: "Ben Shewry", cuisine: "Australian", capacity: 25, description: "A neo-modern representation of Australia's native ingredients")
# Restaurant.create!(name: "Favikan", chef: "Magnus Nilsson", cuisine: "Swedish", capacity: 20, description: "Swedish traditional techniques and local produce combine with modern French techniques to create a unique experience")
# Restaurant.create!(name: "Alinea", chef: "Grant Achatz", cuisine: "Modern American", capacity: 16, description: "An experience in modern Art & Food - expect to be shocked and thrilled!")
# Restaurant.create!(name: "D.O.M.", chef: "Alex Atala", cuisine: "Brazilian", capacity: 80, description: "A stunning modernist take on traditional Brazilian ingredients and recipes")
# Restaurant.create!(name: "Atelier Crenn", chef: "Dominique Crenn", cuisine: "French", capacity: 100, description: "A journey through Dominique's life, represented in her beautiful and delicious creations")
# Restaurant.create!(name: "Pujol", chef: "Enrique Olivera", cuisine: "Mexican", capacity: 34, description: "Traditional Mexican recipies and techniques transported into the finest modern cuisine")
# Restaurant.create!(name: "Hisa Franko", chef: "Ana Ros", cuisine: "Slovenian", capacity: 40, description: "A beautiful transformation of traditional Slovenian fare")
# Restaurant.create!(name: "Gaggan", chef: "Gaggan Anand", cuisine: "Indian", capacity: 100, description: "Wonderous Indian dishes based on tradition, but twisted into hyper-modern transformations")
# Restaurant.create!(name: "The French Laundry", chef: "Thomas Keller", cuisine: "Californian", capacity: 100, lat: 38.404400, lng: -122.364988, description: "A bastion of Wine Country haute-cuisine, considered one of the best in California.")
# Restaurant.create!(name: "El Bulli", chef: "Ferran Adrià", cuisine: "Haute Cuisine", capacity: 100, lat: 42.251354, lng: 0.228353, city: 'Roses, Catalonia, Spain', description: "THE playground for modern gastronimic delights, rooted in a tradition of experimenting and haute cuisine")


# Restaurant.find_by(name: "Osteria Francescana").update(lat: 44.644807, lng: 10.921578)
# Restaurant.find_by(name: "Blue Hill Restaurant").update(lat: 40.732034, lng: -73.999707)
# Restaurant.find_by(name: "El Restaurante Patagonia Sur").update(lat: -34.640204, lng: -58.361744)
# Restaurant.find_by(name: "N/Naka").update(lat: 34.025162, lng: -118.412232)
# Restaurant.find_by(name: "Attica").update(lat: -37.876965, lng: 144.997343)
# Restaurant.find_by(name: "Favikan").update(lat: 63.435305, lng: 13.292890)
# Restaurant.find_by(name: "Alinea").update(lat: 41.913439, lng: -87.647905)
# Restaurant.find_by(name: "D.O.M.").update(lat: -23.566303, lng: -46.667427)
# Restaurant.find_by(name: "Atelier Crenn").update(lat: 37.798348, lng: -122.435857)
# Restaurant.find_by(name: "Pujol").update(lat: 19.433636, lng: -99.185494)
# Restaurant.find_by(name: "Hisa Franko").update(lat: 46.247298, lng: 13.537742)
# Restaurant.find_by(name: "Gaggan").update(lat: 13.737738, lng: 100.542076)
#
# Restaurant.find_by(name: "The French Laundry").update(city: "Yountville, California")
# Restaurant.find_by(name: "Osteria Francescana").update(city: "Modena, Italy")
# Restaurant.find_by(name: "Blue Hill Restaurant").update(city: "New York City, New Yok")
# Restaurant.find_by(name: "El Restaurante Patagonia Sur").update(city: "Buenos Aires, Argentina")
# Restaurant.find_by(name: "N/Naka").update(city: "Los Angeles, California")
# Restaurant.find_by(name: "Attica").update(city: "Melbourne, Australia")
# Restaurant.find_by(name: "Favikan").update(name: "Fäviken", city: "Järpen, Sweden")
# Restaurant.find_by(name: "Alinea").update(city: "Chicago, Illinois")
# Restaurant.find_by(name: "D.O.M.").update(city: "São Paulo, Brazil")
# Restaurant.find_by(name: "Atelier Crenn").update(city: "San Francisco, California")
# Restaurant.find_by(name: "Pujol").update(city: "Mexico City, Mexico")
# Restaurant.find_by(name: "Hisa Franko").update(city: "Kobarid, Slovenia", name: "Hiša Franko")
# Restaurant.find_by(name: "Gaggan").update(city: "Bangkok, Thailand")
#
# Restaurant.find_by(name: "The French Laundry").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467927252/keller_ccykiz.jpg")
# Restaurant.find_by(name: "Osteria Francescana").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927251/massimo_ftjevi.jpg")
# Restaurant.find_by(name: "Blue Hill Restaurant").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927251/barber_z1vth1.jpg")
# Restaurant.find_by(name: "El Restaurante Patagonia Sur").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927251/mallman_wtwjjq.jpg")
# Restaurant.find_by(name: "N/Naka").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_200/v1467927251/niki_wewq2b.jpg")
# Restaurant.find_by(name: "Attica").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927251/Ben-Shewry_pz7xoa.jpg")
# Restaurant.find_by(name: "Fäviken").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_200/v1467927251/magnus_yqnq5g.jpg")
# Restaurant.find_by(name: "Alinea").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927251/achatz_prxbcm.jpg")
# Restaurant.find_by(name: "D.O.M.").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_200/v1467927252/Alex_Atala_fsifeg.jpg")
# Restaurant.find_by(name: "Atelier Crenn").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927253/Dominique-Crenn_nrqgha.jpg")
# Restaurant.find_by(name: "Pujol").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_200,w_200/v1467927252/olvera_xvp5es.jpg")
# Restaurant.find_by(name: "Hiša Franko").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927252/ros_jko1w1.jpg")
# Restaurant.find_by(name: "Gaggan").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927252/gaggan_qqav4y.jpg")
# Restaurant.find_by(name: "El Bulli").update(chef_pic_url: "http://res.cloudinary.com/dldvsrho8/image/upload/c_scale,w_200/v1467927252/adria_hpidsn.jpg")

# a = [ "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822969/nnaka11_dq0cor.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822967/osteria2_fsbjqh.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol11_apqx2i.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822954/pujol7_pklkzt.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol12_uyxcvp.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol9_f1jev8.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol10_eqlfri.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol8_adhnco.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822952/pujol5_gzsp5s.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822952/pujol4_j2ztk0.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822952/pujol6_kakho3.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822952/pujol0_ggndfu.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822951/osteria1_xeofps.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822951/pujol3_sqvckp.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822951/pujol2_dg7vq7.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822950/patsur9_cmi1xn.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822950/pujol1_ycguwr.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822949/patsurmallman_ieqze4.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822949/patsur7_sp59et.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822949/patsur8_ihufpq.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822949/patsur6_rxzjtl.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822947/patsur3_unme0r.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822948/osteria0_cfpgwp.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822948/patsur5_alq5q4.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822946/patsur4_bawmjq.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822945/patsur2_seseqi.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822945/patsur1_qz9dpp.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822944/patsur0_y16agq.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822943/osteriasign_eflteh.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822942/osteria8_f93miz.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822941/osteria6_agj7eu.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822941/osteria7_gzji9n.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822940/osteria5_mdzyeq.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822938/osteria4_agiiai.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822937/osteria3_colthk.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822922/nnaka7_becy6h.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822921/nnaka10_ubesx9.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822921/nnaka9_rwx7v7.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822921/nnaka8_pvzbh9.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822921/nnaka4_llmtze.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822920/nnaka6_o1cfhv.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822920/nnaka5_jrqs0a.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822920/nnaka2_klirdj.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822920/nnaka0_ekntac.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822920/nnaka3_hw6ab3.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822919/nnaka1_qe7l2x.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf8_qxuge3.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf7_v5ady5.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf5_csfaie.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf6_oujr5k.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf4_ypvjbo.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822918/faviken9_eug2m0.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822918/hf0_blqpza.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822918/hf1_wwxerg.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822918/hf2_rqmtoo.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822918/hf3_dckgyt.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822917/gaggan10_yxr90q.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822917/gaggan7_og4qer.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822917/gaggan9_bmyat1.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822916/dom1_azdcuc.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822916/faviken0_t8v4d8.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822916/gaggan8_wkuf1s.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822916/gaggan6_sgr4mm.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822916/gaggan5_uqb91l.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822916/gaggan4_oeivtl.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822915/gaggan3_vow9m9.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822915/gaggan1_bpdtyh.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822914/gaggan2_jajskz.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822914/faviken8_nzyrwy.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822914/gaggan0_arryej.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822914/faviken11_panhza.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822913/faviken10_rp9t2e.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822913/faviken3_xnstyx.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822913/faviken7_wuxyru.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822912/attica10_ireji4.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822912/faviken6_s9gq9u.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822912/faviken5_c6ee2k.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822911/faviken4_k1bzbv.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822911/dom8_tytptb.png",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822909/faviken2_rqu5s2.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822908/faviken1_lufezo.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822904/dom9_dyzyjb.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822904/dom5_ud6ssi.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822904/dom7_alrs6s.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822903/dom4_xxpzjy.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822903/dom3_quxtn9.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822903/dom0_k0zjmm.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822903/dom6_kirwhk.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822902/attica2_xhwi8g.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822902/dom2_q2v9mu.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822902/bluehill6_jxnxfe.png",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822901/bluehill9_n2vkfx.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822901/bluehill8_dmbmrq.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822901/bluehill5_pbzv2u.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822901/bluehill7_yzbptq.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822900/bluehill4_dlsuwh.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822900/bluehill2_vt9na3.jpg",
#    "https://res-5.cloudinary.com/dldvsrho8/image/upload/v1467822900/bluehill6_dwldxm.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822900/bluehill3_gzgowq.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822899/alinea7_gaqc9x.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822899/bluehill1_y7gksa.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822899/attica8_xrt5xx.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822899/bluehill0_y7dmg3.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822899/attica9_fz9oqw.jpg",
#    "https://res-2.cloudinary.com/dldvsrho8/image/upload/v1467822898/attica7_nupmww.jpg",
#    "https://res-4.cloudinary.com/dldvsrho8/image/upload/v1467822898/attica6_ta1fqc.jpg",
#    "https://res-1.cloudinary.com/dldvsrho8/image/upload/v1467822898/attica4_nbpuvw.jpg",
#    "https://res-3.cloudinary.com/dldvsrho8/image/upload/v1467822898/attica5_sci3cv.jpg"]
#
#
# a.each do |url|
#   if url.include?("attica")
#     RestaurantPic.create!(restaurant_id: 31, picture_url: url)
#   elsif url.include?("bluehill")
#     RestaurantPic.create!(restaurant_id: 28, picture_url: url)
#   elsif url.include?("patsur")
#     RestaurantPic.create!(restaurant_id: 29, picture_url: url)
#   elsif url.include?("faviken")
#     RestaurantPic.create!(restaurant_id: 32, picture_url: url)
#   elsif url.include?("osteria")
#     RestaurantPic.create!(restaurant_id: 27, picture_url: url)
#   elsif url.include?("alinea")
#     RestaurantPic.create!(restaurant_id: 33, picture_url: url)
#   elsif url.include?("dom")
#     RestaurantPic.create!(restaurant_id: 34, picture_url: url)
#   elsif url.include?("hf")
#     RestaurantPic.create!(restaurant_id: 37, picture_url: url)
#   elsif url.include?("gaggan")
#     RestaurantPic.create!(restaurant_id: 38, picture_url: url)
#   elsif url.include?("ac")
#     RestaurantPic.create!(restaurant_id: 35, picture_url: url)
#   elsif url.include?("pujol")
#     RestaurantPic.create!(restaurant_id: 36, picture_url: url)
#   end
# end

Restaurant.find_by(name: "The French Laundry").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467941985/fl5_hw5gab.jpg")
Restaurant.find_by(name: "Osteria Francescana").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822967/osteria2_fsbjqh.jpg")
Restaurant.find_by(name: "Blue Hill Restaurant").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822901/bluehill7_yzbptq.jpg")
Restaurant.find_by(name: "El Restaurante Patagonia Sur").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822949/patsurmallman_ieqze4.jpg")
Restaurant.find_by(name: "N/Naka").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822921/nnaka9_rwx7v7.jpg")
Restaurant.find_by(name: "Attica").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822897/attica3_dgfzl3.jpg")
Restaurant.find_by(name: "Fäviken").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822918/faviken9_eug2m0.jpg")
Restaurant.find_by(name: "Alinea").update(restaurant_cover_pic: "https://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg")
Restaurant.find_by(name: "D.O.M.").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822904/dom7_alrs6s.jpg")
Restaurant.find_by(name: "Atelier Crenn").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822895/ac5_dtudhz.jpg")
Restaurant.find_by(name: "Pujol").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822953/pujol11_apqx2i.jpg")
Restaurant.find_by(name: "Hiša Franko").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822919/hf6_oujr5k.jpg")
Restaurant.find_by(name: "Gaggan").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467822916/gaggan6_sgr4mm.jpg")
Restaurant.find_by(name: "El Bulli").update(restaurant_cover_pic: "http://res.cloudinary.com/dldvsrho8/image/upload/v1467941998/eb9_heu6j7.jpg")
