class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        console.log(this.show_points);
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 20}, {x: 500, y: 30}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [222, 28, 24, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 40}, {x: 500, y: 50}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [222, 110, 24, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 60}, {x: 500, y: 70}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [222, 199, 24, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 80}, {x: 500, y: 90}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [70, 222, 24, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 100}, {x: 500, y: 110}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [24, 222, 169, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 120}, {x: 500, y: 130}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [24, 149, 222, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 140}, {x: 500, y: 150}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [47, 24, 222, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 160}, {x: 500, y: 170}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [133, 24, 222, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 180}, {x: 500, y: 190}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [186, 24, 222, 255], framebuffer );
        this.drawBezierCurve( {x: 100, y: 200}, {x: 78, y: 200}, {x: 500, y: 210}, {x: 700, y: 500}, this.num_curve_sections, this.show_points, [222, 24, 189, 255], framebuffer );
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        this.drawCircle( {x: 600, y: 350}, 150, this.num_curve_sections, this.show_points, [45, 182, 250, 255], framebuffer );
        this.drawCircle( {x: 690, y: 420}, 20, this.num_curve_sections, this.show_points, [45, 124, 250, 255], framebuffer );
        this.drawCircle( {x: 100, y: 80}, 60, this.num_curve_sections, this.show_points, [137, 160, 245, 255], framebuffer );
        this.drawCircle( {x: 120, y: 110}, 10, this.num_curve_sections, this.show_points, [137, 160, 245, 255], framebuffer );
        this.drawCircle( {x: 250, y: 275}, 110, this.num_curve_sections, this.show_points, [4, 11, 145, 255], framebuffer );
        this.drawCircle( {x: 300, y: 325}, 18, this.num_curve_sections, this.show_points, [4, 11, 145, 255], framebuffer );
        this.drawCircle( {x: 500, y: 0}, 180, this.num_curve_sections, this.show_points, [59, 67, 227, 255], framebuffer );
        this.drawCircle( {x: 610, y: 70}, 25, this.num_curve_sections, this.show_points, [59, 67, 227, 255], framebuffer );
        this.drawCircle( {x: 50, y: 480}, 100, this.num_curve_sections, this.show_points, [2, 186, 227, 255], framebuffer );
        this.drawCircle( {x: 100, y: 520}, 15, this.num_curve_sections, this.show_points, [2, 186, 227, 255], framebuffer );
        this.drawCircle( {x: 725, y: 120}, 40, this.num_curve_sections, this.show_points, [97, 181, 237, 255], framebuffer );
        this.drawCircle( {x: 745, y: 140}, 8, this.num_curve_sections, this.show_points, [97, 181, 237, 255], framebuffer );
        this.drawCircle( {x: 300, y: 500}, 75, this.num_curve_sections, this.show_points, [6, 34, 138, 255], framebuffer );
        this.drawCircle( {x: 340, y: 535}, 12, this.num_curve_sections, this.show_points, [6, 34, 138, 255], framebuffer );
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let list1 = [ {x: 200, y: 220}, {x: 400, y: 220}, {x: 500, y: 400}, {x: 400, y: 580}, {x: 200, y: 580}, {x: 100, y: 400} ];
        this.drawConvexPolygon(list1, this.show_points, [173, 137, 245, 255], framebuffer);

        let list2 = [ {x: 600, y: 75}, {x: 625, y: 60}, {x: 660, y: 80}, {x: 680, y: 100}, {x: 690, y: 130}, {x: 670, y: 140}, {x: 650, y: 150}, {x: 620, y: 145}, {x: 600, y: 130}, {x: 590, y: 80} ]
        this.drawConvexPolygon(list2, this.show_points, [245, 137, 236, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        // C
        this.drawBezierCurve( {x: 225, y: 150}, {x: 10, y: 150}, {x: 10, y: 500}, {x: 225, y: 500}, this.num_curve_sections, this.show_points, [110, 18, 18, 255], framebuffer );
        this.drawBezierCurve( {x: 225, y: 150}, {x: 30, y: 150}, {x: 30, y: 500}, {x: 225, y: 500}, this.num_curve_sections, this.show_points, [145, 12, 12, 255], framebuffer );
        this.drawBezierCurve( {x: 225, y: 150}, {x: 50, y: 150}, {x: 50, y: 500}, {x: 225, y: 500}, this.num_curve_sections, this.show_points, [191, 11, 11, 255], framebuffer );
        this.drawBezierCurve( {x: 225, y: 150}, {x: 70, y: 150}, {x: 70, y: 500}, {x: 225, y: 500}, this.num_curve_sections, this.show_points, [250, 37, 37, 255], framebuffer );

        // I
        this.drawLine( {x: 250, y: 150}, {x: 250, y: 300}, this.show_points, [115, 49, 5, 255], framebuffer );
        this.drawLine( {x: 251, y: 150}, {x: 251, y: 300}, this.show_points, [166, 71, 8, 255], framebuffer );
        this.drawLine( {x: 252, y: 150}, {x: 252, y: 300}, this.show_points, [209, 90, 10, 255], framebuffer );
        this.drawLine( {x: 253, y: 150}, {x: 253, y: 300}, this.show_points, [255, 125, 38, 255], framebuffer );

        let list = [ {x: 234, y: 325}, {x: 265, y: 325}, {x: 275, y: 350}, {x: 265, y: 375}, {x: 234, y: 375}, {x: 225, y: 350} ];
        this.drawConvexPolygon(list, this.show_points, [240, 178, 137, 255], framebuffer );

        this.drawCircle( {x: 250, y: 350}, 5, this.num_curve_sections, this.show_points, [115, 49, 5, 255], framebuffer );
        this.drawCircle( {x: 250, y: 350}, 8, this.num_curve_sections, this.show_points, [166, 71, 8, 255], framebuffer );
        this.drawCircle( {x: 250, y: 350}, 11, this.num_curve_sections, this.show_points, [209, 90, 10, 255], framebuffer );
        this.drawCircle( {x: 250, y: 350}, 14, this.num_curve_sections, this.show_points, [255, 125, 38, 255], framebuffer );

        // E
        this.drawLine( {x: 275, y: 150}, {x: 275, y: 300}, this.show_points, [120, 101, 5, 255], framebuffer );
        this.drawLine( {x: 276, y: 150}, {x: 276, y: 300}, this.show_points, [181, 153, 9, 255], framebuffer );
        this.drawLine( {x: 277, y: 150}, {x: 277, y: 300}, this.show_points, [227, 192, 14, 255], framebuffer );
        this.drawLine( {x: 278, y: 150}, {x: 278, y: 300}, this.show_points, [242, 211, 53, 255], framebuffer );

        this.drawLine( {x: 275, y: 150}, {x: 325, y: 150}, this.show_points, [120, 101, 5, 255], framebuffer );
        this.drawLine( {x: 275, y: 151}, {x: 325, y: 151}, this.show_points, [181, 153, 9, 255], framebuffer );
        this.drawLine( {x: 275, y: 152}, {x: 325, y: 152}, this.show_points, [227, 192, 14, 255], framebuffer );
        this.drawLine( {x: 275, y: 153}, {x: 325, y: 153}, this.show_points, [242, 211, 53, 255], framebuffer );

        this.drawLine( {x: 275, y: 228}, {x: 310, y: 228}, this.show_points, [120, 101, 5, 255], framebuffer );
        this.drawLine( {x: 275, y: 227}, {x: 310, y: 227}, this.show_points, [181, 153, 9, 255], framebuffer );
        this.drawLine( {x: 275, y: 226}, {x: 310, y: 226}, this.show_points, [227, 192, 14, 255], framebuffer );
        this.drawLine( {x: 275, y: 225}, {x: 310, y: 225}, this.show_points, [242, 211, 53, 255], framebuffer );

        this.drawLine( {x: 275, y: 300}, {x: 325, y: 300}, this.show_points, [120, 101, 5, 255], framebuffer );
        this.drawLine( {x: 275, y: 299}, {x: 325, y: 299}, this.show_points, [181, 153, 9, 255], framebuffer );
        this.drawLine( {x: 275, y: 298}, {x: 325, y: 298}, this.show_points, [227, 192, 14, 255], framebuffer );
        this.drawLine( {x: 275, y: 297}, {x: 325, y: 297}, this.show_points, [242, 211, 53, 255], framebuffer );

        // N
        this.drawLine( {x: 350, y: 150}, {x: 350, y: 300}, this.show_points, [27, 138, 7, 255], framebuffer );
        this.drawLine( {x: 351, y: 150}, {x: 351, y: 300}, this.show_points, [37, 189, 9, 255], framebuffer );
        this.drawLine( {x: 352, y: 150}, {x: 352, y: 300}, this.show_points, [51, 237, 17, 255], framebuffer );
        this.drawLine( {x: 353, y: 150}, {x: 353, y: 300}, this.show_points, [107, 242, 82, 255], framebuffer );

        this.drawBezierCurve( {x: 350, y: 150}, {x: 350, y: 360}, {x: 450, y: 360}, {x: 450, y: 150}, this.num_curve_sections, this.show_points, [27, 138, 7, 255], framebuffer );
        this.drawBezierCurve( {x: 350, y: 150}, {x: 350, y: 340}, {x: 450, y: 340}, {x: 450, y: 150}, this.num_curve_sections, this.show_points, [37, 189, 9, 255], framebuffer );
        this.drawBezierCurve( {x: 350, y: 150}, {x: 350, y: 320}, {x: 450, y: 320}, {x: 450, y: 150}, this.num_curve_sections, this.show_points, [51, 237, 17, 255], framebuffer );
        this.drawBezierCurve( {x: 350, y: 150}, {x: 350, y: 300}, {x: 450, y: 300}, {x: 450, y: 150}, this.num_curve_sections, this.show_points, [107, 242, 82, 255], framebuffer );

        // N
        this.drawLine( {x: 475, y: 150}, {x: 475, y: 300}, this.show_points, [5, 19, 87, 255], framebuffer );
        this.drawLine( {x: 476, y: 150}, {x: 476, y: 300}, this.show_points, [9, 34, 156, 255], framebuffer );
        this.drawLine( {x: 477, y: 150}, {x: 477, y: 300}, this.show_points, [16, 52, 227, 255], framebuffer );
        this.drawLine( {x: 478, y: 150}, {x: 478, y: 300}, this.show_points, [83, 109, 237, 255], framebuffer );

        this.drawBezierCurve( {x: 475, y: 150}, {x: 475, y: 360}, {x: 575, y: 360}, {x: 575, y: 150}, this.num_curve_sections, this.show_points, [5, 19, 87, 255], framebuffer );
        this.drawBezierCurve( {x: 475, y: 150}, {x: 475, y: 340}, {x: 575, y: 340}, {x: 575, y: 150}, this.num_curve_sections, this.show_points, [9, 34, 156, 255], framebuffer );
        this.drawBezierCurve( {x: 475, y: 150}, {x: 475, y: 320}, {x: 575, y: 320}, {x: 575, y: 150}, this.num_curve_sections, this.show_points, [16, 52, 227, 255], framebuffer );
        this.drawBezierCurve( {x: 475, y: 150}, {x: 475, y: 300}, {x: 575, y: 300}, {x: 575, y: 150}, this.num_curve_sections, this.show_points, [83, 109, 237, 255], framebuffer );

        // A
        this.drawCircle( {x: 665, y: 225}, 75, this.num_curve_sections, this.show_points, [205, 140, 237, 255], framebuffer );
        this.drawCircle( {x: 665, y: 225}, 72, this.num_curve_sections, this.show_points, [169, 15, 245, 255], framebuffer );
        this.drawCircle( {x: 665, y: 225}, 69, this.num_curve_sections, this.show_points, [109, 9, 158, 255], framebuffer );
        this.drawCircle( {x: 665, y: 225}, 66, this.num_curve_sections, this.show_points, [68, 3, 99, 255], framebuffer );

        this.drawLine( {x: 740, y: 150}, {x: 740, y: 300}, this.show_points, [205, 140, 237, 255], framebuffer );
        this.drawLine( {x: 739, y: 150}, {x: 739, y: 300}, this.show_points, [169, 15, 245, 255], framebuffer );
        this.drawLine( {x: 738, y: 150}, {x: 738, y: 300}, this.show_points, [109, 9, 158, 255], framebuffer );
        this.drawLine( {x: 737, y: 150}, {x: 737, y: 300}, this.show_points, [68, 3, 99, 255], framebuffer );
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, point_show, color, framebuffer) {
        let t = 1.0 / num_edges;
        let point = p0;
        for( let edge = t; edge < 1.0; edge = edge + t ) {
            let next_x = ( (1-edge)**3 * p0.x ) + ( 3 * (1-edge)**2 * edge * p1.x ) + ( 3 * (1-edge) * edge**2 * p2.x ) + ( edge**3 * p3.x );
            let next_y = ( (1-edge)**3 * p0.y ) + ( 3 * (1-edge)**2 * edge * p1.y ) + ( 3 * (1-edge) * edge**2 * p2.y ) + ( edge**3 * p3.y );
            
            let next = {x: Math.round(next_x), y: Math.round(next_y)};
            this.drawLine(point, next, false, color, framebuffer);
            point = next;
            if ( point_show == true && point != p0 ) {
                this.drawVertex(point, color, framebuffer);
            }
        }
        this.drawLine(point, p3, false, color, framebuffer);
        if ( point_show == true ) {
            this.drawVertex(p0, [0, 0, 0, 255], framebuffer); // make end points black
            this.drawVertex(p3, [0, 0, 0, 255], framebuffer); // make end points black
        }
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, point_show, color, framebuffer) {
        let phi = (2 * Math.PI) / num_edges;
        let point = {x: center.x + radius, y: center.y}; // start drawing directly right of center
        for ( let angle = phi; angle <= (2 * Math.PI); angle = angle + phi ) {
            let next_x = center.x + radius * Math.cos(angle);
            let next_y = center.y + radius * Math.sin(angle);

            let next = {x: Math.round(next_x), y: Math.round(next_y)};
            this.drawLine(point, next, false, color, framebuffer);
            point = next;
            if ( point_show == true ) {
                this.drawVertex(point, color, framebuffer);
            }
        }
        this.drawLine(point, {x: center.x + radius, y: center.y}, false, color, framebuffer);
        if ( point_show == true ) {
            this.drawVertex( {x: center.x + radius, y: center.y}, color, framebuffer );
        }
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, point_show, color, framebuffer) {
        for ( let vertex = 2; vertex < vertex_list.length; vertex++ ) {
            this.drawTriangle( vertex_list[0], vertex_list[vertex-1], vertex_list[vertex], color, framebuffer );
        }

        if (point_show) {
            for ( let vertex = 0; vertex < vertex_list.length; vertex++ ) { // separate loop so vertices are "on top"
                this. drawVertex(vertex_list[vertex], [0, 0, 0, 255], framebuffer);
            }
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        this.drawCircle(v, 5, 6, false, color, framebuffer); // default to 6 edges for vertices, don't show points on vertices
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, point_show, color, framebuffer) {
        if ( point_show == true ) {
            this.drawVertex(p0, color, framebuffer);
            this.drawVertex(p1, color, framebuffer);
        }
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, false, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, false, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
