declare var process: NodeProcess;



class Tree {                            //用来打印树的函数
        
    draw(line:number):void {
    
    var space = " ";
    var spacefin;
    var star = "*";
    var starfin;
    var linefin;
    console.log("");
    for(var i=1;i<=line;i++) {

       spacefin = "";   //初始化空格数
       starfin = "";    //初始化星号数
       linefin = "";

       for(var j=0;j<=(line-(i-1));j++) {

           spacefin = spacefin +space;

       }
       
       for(var k=0;k<(i*2-1);k++) {

           starfin = starfin + star;

       }

       linefin = spacefin + starfin;
       console.log(linefin);

    }
    }
}



interface NodeBuffer {                   //为了能用process从网上找的
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    length: number;
    copy(targetBuffer: NodeBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): void;
    slice(start?: number, end?: number): NodeBuffer;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt8(value: number, offset: number, noAssert?: boolean): void;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
    fill(value: any, offset?: number, end?: number): void;
    INSPECT_MAX_BYTES: number;
}

declare class EventEmitter {
    addListener(event: string, listener: Function);
    on(event: string, listener: Function);
    once(event: string, listener: Function): void;
    removeListener(event: string, listener: Function): void;
    removeAllListeners(event: string): void;
    setMaxListeners(n: number): void;
    listeners(event: string): { Function; }[];
    emit(event: string, ...args: any[]): void;
}



declare var Buffer: {
    new (str: string, encoding?: string): NodeBuffer;
    new (size: number): NodeBuffer;
    new (array: any[]): NodeBuffer;
    prototype: NodeBuffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: NodeBuffer[], totalLength?: number): NodeBuffer;
}

declare class WritableStream extends EventEmitter {
    writable: boolean;
    write(str: string, encoding?: string, fd?: string): boolean;
    write(buffer: NodeBuffer): boolean;
    end(): void;
    end(str: string, enconding: string): void;
    end(buffer: NodeBuffer): void;
    destroy(): void;
    destroySoon(): void;
}

declare class ReadableStream extends EventEmitter {
    readable: boolean;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    destroy(): void;
    pipe(destination: WritableStream, options?: { end?: boolean; }): void;
}

declare class NodeProcess extends EventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    env: any;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    getuid(): number;
    setuid(id: number): void;
    version: string;
    versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
    config: {
        target_defaults: {
            cflags: any[];
            default_configuration: string;
            defines: string[];
            include_dirs: string[];
            libraries: string[];
        };
        variables: {
        clang: number;
        host_arch: string;
        node_install_npm: boolean;
        node_install_waf: boolean;
        node_prefix: string;
        node_shared_openssl: boolean;
        node_shared_v8: boolean;
        node_shared_zlib: boolean;
        node_use_dtrace: boolean;
        node_use_etw: boolean;
        node_use_openssl: boolean;
        target_arch: string;
        v8_no_strict_aliasing: number;
        v8_use_snapshot: boolean;
        visibility: string;
    };
    };
    kill(pid: number, signal?: string): void;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    memoryUsage(): { rss: number; heapTotal; number; heapUsed: number; };
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(): number[];
    hrtime(start: number[]): number[];
}


var line = process.argv[2];       //给line赋值
var tree = new Tree();            //调用tree里的draw来打印树
tree.draw(+line);