const books = [
    {
        title: "Thế giới diệu kỳ",
        img: "/src/static/images/sachbo/thegioidieuky.jpg",
        desc: "Cuốn sách dành cho trẻ em, truyền tải thông điệp về trí tưởng tượng và khám phá những điều kỳ diệu trong cuộc sống.",
        author: "Paulo Coelho",
        authorImg: "/src/static/images/tacgia/paul_coelho.jpg"
    },
    {
        title: "Đắc Nhân Tâm",
        img: "/src/static/images/dachnhantam.jpg",
        desc: "Một trong những cuốn sách kỹ năng sống nổi tiếng nhất thế giới.",
        author: "Dale Carnegie",
        authorImg: "/src/static/images/tacgia/dale_carnegie.jpg"
    },
    {
        title: "Cà phê cùng Tony",
        img: "/src/static/images/caphecungtony.jpg",
        desc: "Những bài học truyền cảm hứng cho giới trẻ Việt Nam.",
        author: "Tony Buổi Sáng",
        authorImg: "/src/static/images/tacgia/tony.jpg"
    },
    {
        title: "Những người khốn khổ",
        img: "/src/static/images/sachbo/những người khốn khổ.png",
        desc: "Câu chuyện về Jean Valjean, một người từng bị tù vì ăn trộm bánh mì, sau khi được một giám mục giúp đỡ, ông quyết tâm làm lại cuộc đời. Cuốn sách khắc họa sự bất công của xã hội Pháp thế kỷ 19 và thông điệp về lòng nhân đạo.",
        author: "Victor Hugo",
        authorImg: "/src/static/images/tacgia/victorhugo.jpg"
    },
    {
        title: "Muôn Kiếp Nhân Sinh",
        img: "/src/static/images/muonkiepnhansinh.jpg",
        desc: "Tác giả Nguyên Phong trình bày quan điểm về luân hồi và nhân quả thông qua những câu chuyện tiền kiếp của Thomas...",
        author: "Nguyên Phong",
        authorImg: "/src/static/images/tacgia/nguyenphong.jpg"
    },
    {
        title: "The Lord of the Rings",
        img: "/src/static/images/sachbo/the lord of the ring.png",
        desc: "Bộ tiểu thuyết giả tưởng của J.R.R. Tolkien kể về hành trình tiêu diệt chiếc Nhẫn Chúa để cứu Trung Địa khỏi bóng tối...",
        author: "J.R.R. Tolkien",
        authorImg: "/src/static/images/tacgia/JRRTolkien.jpg"
    },
    {
        title: "Tại sao lại chần chừ?",
        img: "/src/static/images/sachle/whychanchu.jpg",
        desc: "Cuốn sách 'Tại sao lại chần chừ?' là hồi chuông thức tỉnh cho những ai đang sống trong vùng an toàn và trì hoãn hành động...",
        author: "Teo Aik Cher",
        authorImg: "/src/static/images/tacgia/Teo Aik Cher.jpg"
    },
    {
        title: "Ma Trận Cuộc Đời Keanu Reeves",
        img: "/src/static/images/sachle/matrancuocdoi.jpg",
        desc: "Ma Trận Cuộc Đời là bức chân dung khác biệt về Keanu Reeves...",
        author: "Marc Shapiro",
        authorImg: "/src/static/images/tacgia/Marc Shapiro.jpg"
    },
    {
        title: "Thần thoại Hy Lạp",
        img: "/src/static/images/sachbo/thanthoaihylap.png",
        desc: "Thần thoại Hy Lạp của Thomas Bulfinch là một tác phẩm tổng hợp những câu chuyện cổ xưa của nền văn minh Hy Lạp...",
        author: "Thomas Bulfinch",
        authorImg: "/src/static/images/tacgia/bulftnch-thomas.jpg"
    },
    {
        title: "Làm chủ cảm xúc",
        img: "/src/static/images/sachbo/lamchucamxuc.jpg",
        desc: "Cuốn sách Làm chủ cảm xúc của Little Tiger Group là một tác phẩm mang tính cách mạng trong lĩnh vực tâm lý học...",
        author: "Little Tiger Group",
        authorImg: "/src/static/images/tacgia/little_tiger.jpg"
    },
    {
        title: "Hiệp sĩ bọ rùa",
        img: "/src/static/images/sachbo/Bộ Sách Hiệp Sĩ Bọ Rùa.png",
        desc: "Hiệp sĩ bọ rùa của Corey R. Tabor là một câu chuyện phiêu lưu kỳ thú, pha trộn giữa thần thoại và thực tế...",
        author: "Corey R. Tabor",
        authorImg: "/src/static/images/tacgia/corey.png"
    },
    {
        title: "Cho đi là còn mãi",
        img: "/src/static/images/sachle/chodilaconmai.jpg",
        desc: "Cho đi là còn mãi là một lời nhắc nhở dịu dàng về giá trị của lòng vị tha và sự sẻ chia...",
        author: "Azim Jamal",
        authorImg: "/src/static/images/tacgia/azim_jamal.jpg"
    },
    {
        title: "Nhân duyên mèo định",
        img: "/src/static/images/sachle/nhanduyenmeodinh.jpg",
        desc: "Nhân duyên mèo định là một câu chuyện ngọt ngào về tình bạn, tình yêu và những điều kỳ diệu...",
        author: "Melinda Metz",
        authorImg: "/src/static/images/tacgia/melinda_metz.jpg"
    },
    {
        title: "Hạnh phúc mỗi ngày",
        img: "/src/static/images/sachle/hanhphucmoingay.jpg",
        desc: "Hạnh phúc mỗi ngày là một lời thì thầm nhẹ nhàng từ Ajahn Brahm...",
        author: "AJAHN BRAMH",
        authorImg: "/src/static/images/tacgia/Ajahn Brahm.jpg"
    },
    {
        title: "Đủ duyên ta lại tương phùng",
        img: "/src/static/images/sachbo/duduyentalaituongphung.jpg",
        desc: "Tác phẩm Đủ duyên ta lại tương phùng của Thích Đồng Tâm mang đến thông điệp sâu sắc về duyên số trong cuộc sống...",
        author: "Thích Đồng Tâm",
        authorImg: "/src/static/images/tacgia/thich_dong_tam.jpg"
    },
    {
        title: "Khác biệt thật là tuyệt",
        img: "/src/static/images/sachbo/khacbietthatlatuyet.jpg",
        desc: "Cuốn sách của tác giả Youngme Moon khám phá những giá trị tuyệt vời của sự khác biệt và vai trò quan trọng của việc chấp nhận bản thân...",
        author: "Youngme Moon",
        authorImg: "/src/static/images/tacgia/youngme.jpg"
    },
    {
        title: "A song of ice and fire",
        img: "/src/static/images/sachbo/A song of ice and fire.png",
        desc: "A Song of Ice and Fire của George R.R. Martin là một loạt tiểu thuyết nổi tiếng đầy mê hoặc và kịch tính...",
        author: "George R.R. Martin",
        authorImg: "/src/static/images/tacgia/George_RR_Martin.jpg"
    },
    {
        title: "Sherlock Holmes",
        img: "/src/static/images/sachbo/Sherlock.png",
        desc: "Những câu chuyện trinh thám về Sherlock Holmes của Arthur Conan Doyle đã trở thành một phần không thể thiếu trong kho tàng văn học thế giới...",
        author: "Arthur Conan Doyle",
        authorImg: "/src/static/images/tacgia/Arthur_Conan_Doyle.png"
    },
    {
        title: "Bí quyết đơn giản hóa tình yêu",
        img: "/src/static/images/sachle/biquyetdongianhoatinhyeu.jpg",
        desc: "Trong một thế giới đầy kỳ vọng và áp lực, tình yêu đôi khi trở thành điều phức tạp...",
        author: "Marion Kustenmacher",
        authorImg: "/src/static/images/tacgia/marion_kustenmacher.jpg"
    },
    {
        title: "Bí quyết đơn tình yêu",
        img: "/src/static/images/sachle/biquyetdongianhoatinhyeu.jpg",
        desc: "Trong một thế giới đầy kỳ vọng và áp lực, tình yêu đôi khi trở thành điều phức tạp...",
        author: "Marion Kustenmacher",
        authorImg: "/src/static/images/tacgia/marion_kustenmacher.jpg"
    },
    
  ];